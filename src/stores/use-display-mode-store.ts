import { create } from 'zustand';

type DisplayMode = 'list' | 'cards';

interface DisplayModeState {
  displayMode: DisplayMode;
  setDisplayMode: (mode: DisplayMode) => void;
}

export const useDisplayModeStore = create<DisplayModeState>((set) => ({
  displayMode: 'list',
  setDisplayMode: (mode) => set({ displayMode: mode }),
}));
