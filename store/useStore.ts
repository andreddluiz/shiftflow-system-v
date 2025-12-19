
import { create } from 'zustand';
// Changed import to explicitly point to types/index.ts to avoid conflict with root-level types.ts
import { AppState, UserProfile } from '../types/index';

export const useStore = create<AppState>((set) => ({
  user: null,
  isAuthenticated: false,
  loading: true,
  setUser: (user) => set({ user, isAuthenticated: !!user, loading: false }),
  setLoading: (loading) => set({ loading }),
}));
