// src/components/CustomerCard.jsx

import { motion } from 'framer-motion'
import { useGame } from '../store/gameStore'

export default function CustomerCard() {
  const customer = useGame((s) => s.currentCustomer)

  // لو ما في عميل (وقت البداية)، لا نعرض شي
  if (!customer) return null

  return (
    <motion.div
      key={customer.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-mud/20 border border-clay/40 rounded-xl p-4 space-y-3"
    >
      <div className="space-y-1">
        <h2 className="text-gold font-bold text-lg">{customer.name}</h2>
        <p className="text-clay text-xs">{customer.title}</p>
      </div>

      <p className="text-gold/90 leading-relaxed text-sm border-r-2 border-clay pr-3">
        {customer.line}
      </p>
    </motion.div>
  )
} 