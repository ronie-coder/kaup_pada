'use client'

import { create } from 'zustand'

interface AppState {
  isMenuOpen: boolean
  isLoaderDone: boolean
  cursorVariant: 'default' | 'hover' | 'click'
  setMenuOpen: (open: boolean) => void
  setLoaderDone: (done: boolean) => void
  setCursorVariant: (variant: 'default' | 'hover' | 'click') => void
}

export const useAppStore = create<AppState>((set) => ({
  isMenuOpen: false,
  isLoaderDone: false,
  cursorVariant: 'default',
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setLoaderDone: (done) => set({ isLoaderDone: done }),
  setCursorVariant: (variant) => set({ cursorVariant: variant }),
}))
