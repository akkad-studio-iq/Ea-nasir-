// src/components/Choices.jsx

import { useGame } from '../store/gameStore'

export default function Choices() {
  const customer = useGame((s) => s.currentCustomer)
  const applyChoice = useGame((s) => s.applyChoice)

  if (!customer) return null

  return (
    <div className="space-y-2">
      {customer.choices.map((choice, i) => (
        <button
          key={i}
          onClick={() => applyChoice(choice)}
          className="w-full text-right bg-mud/30 hover:bg-clay hover:text-ink text-gold/90 text-sm py-3 px-4 rounded-lg border border-mud/40 transition leading-relaxed"
        >
          {choice.text}
        </button>
      ))}
    </div>
  )
}