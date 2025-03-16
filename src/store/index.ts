import { create } from 'zustand';

interface User {
  id: string;
  address: string;
  credits: number;
}

interface AppState {
  user: User | null;
  isConnected: boolean;
  connect: () => void;
  disconnect: () => void;
  setUser: (user: User) => void;
}

export const useStore = create<AppState>((set) => ({
  user: null,
  isConnected: false,
  connect: () => set({ isConnected: true }),
  disconnect: () => set({ isConnected: false, user: null }),
  setUser: (user) => set({ user }),
}));