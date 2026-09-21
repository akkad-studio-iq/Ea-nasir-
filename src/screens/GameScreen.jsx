// src/screens/GameScreen.jsx

import HUD from '../components/HUD'
import CustomerCard from '../components/CustomerCard'
import Choices from '../components/Choices'

export default function GameScreen() {
  return (
    <div className="space-y-4">
      <HUD />
      <CustomerCard />
      <Choices />
    </div>
  )
}