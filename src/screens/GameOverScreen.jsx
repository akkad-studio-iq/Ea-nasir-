// src/screens/GameOverScreen.jsx

import { useGame } from '../store/gameStore'

const REASONS = {
  stress: {
    title: 'انكسرت',
    line: 'التوتر أخذك. صرت تصرخ على عمالك بلا سبب. التجارة تركتك.',
  },
  reputation: {
    title: 'سقطت سمعتك',
    line: 'ما بقى أحد يثق بك. حتى أهلك صاروا يسألون قبل ما يستلفون منك.',
  },
  wealth: {
    title: 'أفلست',
    line: 'خزنتك فارغة. عليك ديون. مرَدك سوق العبيد إن لم تتدبّر.',
  },
}

export default function GameOverScreen() {
  const reason = useGame((s) => s.gameOverReason)
  const day = useGame((s) => s.day)
  const reputation = useGame((s) => s.reputation)
  const wealth = useGame((s) => s.wealth)
  const resetGame = useGame((s) => s.resetGame)

  const info = REASONS[reason] ?? REASONS.reputation

  return (
    <div className="text-center space-y-6">
      <div className="space-y-2">
        <p className="text-blood text-sm tracking-widest">نهاية</p>
        <h1 className="text-3xl font-bold text-blood">{info.title}</h1>
        <p className="text-gold/80 text-sm leading-relaxed">{info.line}</p>
      </div>

      <div className="bg-mud/20 border border-mud/40 rounded-xl p-4 space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-mud">صمدت</span>
          <span className="text-gold font-bold">{day - 1} يوم</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-mud">السمعة</span>
          <span className="text-gold font-bold">{reputation}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-mud">الفلوس</span>
          <span className="text-gold font-bold">{wealth}</span>
        </div>
      </div>

      <button
        onClick={resetGame}
        className="w-full bg-clay hover:bg-mud text-ink font-bold py-3 rounded-lg transition"
      >
        جرّب مرة ثانية
      </button>
    </div>
  )
}