import { useGame } from './store/gameStore'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

export default function App() {
  const screen = useGame((s) => s.screen)

  return (
    <div className="min-h-screen bg-ink text-gold flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {screen === 'start' && <StartScreen />}
        {screen === 'playing' && <GameScreen />}
        {screen === 'over' && <GameOverScreen />}
      </div>
    </div>
  )
}
