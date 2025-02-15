import { User } from "@/types/AuthType";
import { create } from "zustand";
import { persist } from "zustand/middleware";


interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  login: (data: { usuario: User; token: string }) => void;
  logout: () => void;
  updateUser: (updatedData: Partial<User>) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      token: null,

      login: ({ usuario, token }) => {
        set({ user: usuario, token, isAuthenticated: true });
      },

      logout: () => set({ user: null, token: null, isAuthenticated: false }),

      updateUser: (updatedData) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updatedData } : null,
        })),
    }),
    {
      name: "auth-storage", // guardar no localStorage 
    }
  )
);
