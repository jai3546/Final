import { create } from 'zustand';

interface AuthState {
  isAuthenticated: boolean;
  username: string | null;
  isGuest: boolean;
  login: (username: string) => void;
  continueAsGuest: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: null,
  isGuest: false,
  login: (username) => set({ isAuthenticated: true, username, isGuest: false }),
  continueAsGuest: () => set({ isAuthenticated: true, username: 'Guest', isGuest: true }),
  logout: () => set({ isAuthenticated: false, username: null, isGuest: false }),
}));