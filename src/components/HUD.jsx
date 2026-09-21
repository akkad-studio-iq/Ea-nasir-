// src/components/HUD.jsx

import { useGame } from '../store/gameStore'

// مكون صغير داخلي: شريط مؤشر واحد
function StatBar({ label, value, max, color }) {
  const pct = Math.max(0, Math.min(100, (value / max) * 100))
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs">
        <span className="text-mud">{label}</span>
        <span className="text-gold font-bold">{value}</span>
      </div>
      <div className="h-1.5 bg-mud/40 rounded-full overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-500`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export default function HUD() {
  const day = useGame((s) => s.day)
  const reputation = useGame((s) => s.reputation)
  const wealth = useGame((s) => s.wealth)
  const stress = useGame((s) => s.stress)

  return (
    <div className="bg-mud/20 border border-mud/40 rounded-xl p-3 space-y-3">
      <div className="flex justify-between items-center">
        <span className="text-clay text-xs tracking-widest">اليوم</span>
        <span className="text-gold font-bold text-lg">{day}</span>
      </div>

      <StatBar label="السمعة" value={reputation} max={100} color="bg-gold" />
      <StatBar label="الفلوس" value={wealth}     max={100} color="bg-clay" />
      <StatBar label="التوتر" value={stress}     max={100} color="bg-blood" />
    </div>
  )
}