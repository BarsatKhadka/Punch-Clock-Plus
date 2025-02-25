import { create } from "zustand";

export const useStore = create((set) => ({
  loginOrSignUp: false,
  setLoginOrSignUp: (value) => set({ loginOrSignUp: value }),
  authenticated: localStorage.getItem("jwt") ? true : false,
  setAuthenticated: (value) => set({authenticated: value})
}));