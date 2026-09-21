// src/screens/StartScreen.jsx

import { useGame } from '../store/gameStore'

export default function StartScreen() {
  const startGame = useGame((s) => s.startGame)

  return (
    <div className="text-center space-y-6">
      <div className="space-y-2">
        <p className="text-clay text-sm tracking-widest">بابل — 1750 ق.م</p>
        <h1 className="text-4xl font-bold text-gold">إيا-ناصر</h1>
        <p className="text-mud text-sm">تاجر نحاس. سمعته على المحك.</p>
      </div>

      <p className="text-gold/80 text-sm leading-relaxed">
        عميل غاضب كل يوم. ثلاثة خيارات: اعتذر، واجه، أو اكذب.
        <br />
        لا تدع السمعة تنكسر، ولا التوتر يقتلك.
      </p>

      <button
        onClick={startGame}
        className="w-full bg-clay hover:bg-mud text-ink font-bold py-3 rounded-lg transition"
      >
        ابدأ التجارة
      </button>

      <p className="text-mud text-xs">مستوحاة من رسالة نني الشهيرة</p>
    </div>
  )
}