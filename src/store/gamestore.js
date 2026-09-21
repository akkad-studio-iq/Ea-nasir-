// src/store/gameStore.js

import { create } from 'zustand'
import { customers, pickRandomCustomer } from '../data/customers'

// دالة صغيرة: تحصر الرقم بين حد أدنى وأقصى
const clamp = (value, min, max) => Math.max(min, Math.min(max, value))

export const useGame = create((set, get) => ({
  // ===== الحالة الابتدائية =====
  screen: 'start', // 'start' | 'playing' | 'over'
  reputation: 100,
  wealth: 100,
  stress: 0,
  day: 1,
  currentCustomer: null,
  gameOverReason: null,
  history: [], // سجل القرارات
  
  // ===== الأحداث =====
  
  // 1) ابدأ لعبة جديدة
  startGame: () => {
    const first = pickRandomCustomer()
    set({
      screen: 'playing',
      reputation: 100,
      wealth: 100,
      stress: 0,
      day: 1,
      currentCustomer: first,
      gameOverReason: null,
      history: [],
    })
  },
  
  // 2) طبّق اختيار اللاعب
  applyChoice: (choice) => {
    const { reputation, wealth, stress, day, currentCustomer, history } = get()
    const e = choice.effects
    
    const next = {
      reputation: clamp(reputation + (e.reputation ?? 0), 0, 100),
      wealth: clamp(wealth + (e.wealth ?? 0), 0, 999),
      stress: clamp(stress + (e.stress ?? 0), 0, 100),
      day: day + 1,
      history: [
        ...history,
        { day, customer: currentCustomer.name, choice: choice.text },
      ],
    }
    
    // فحص الخسارة
    if (next.stress >= 100) {
      return set({ ...next, screen: 'over', gameOverReason: 'stress' })
    }
    if (next.reputation <= 0) {
      return set({ ...next, screen: 'over', gameOverReason: 'reputation' })
    }
    if (next.wealth <= 0) {
      return set({ ...next, screen: 'over', gameOverReason: 'wealth' })
    }
    
    // نختار عميل جديد غير الحالي
    const nextCustomer = pickRandomCustomer(currentCustomer.id)
    set({ ...next, currentCustomer: nextCustomer })
  },
  
  // 3) رجوع لشاشة البداية
  resetGame: () => set({
    screen: 'start',
    reputation: 100,
    wealth: 100,
    stress: 0,
    day: 1,
    currentCustomer: null,
    gameOverReason: null,
    history: [],
  }),
}))