// "use client";

// import { create } from "zustand";

// export const useIPOStore = create((set) => ({
//   ipos: [],
//   setIPOs: (list) => set({ ipos: list }),
//   // handy if you later add loading/error states
//   reset: () => set({ ipos: [] }),
// }));

"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useIPOStore = create(
  persist(
    (set) => ({
      ipos: [],
      setIPOs: (list) => set({ ipos: list || [] }),
      reset: () => set({ ipos: [] }),
    }),
    {
      name: "ipo-store",
      storage: createJSONStorage(() => sessionStorage), // per-tab persistence
      partialize: (state) => ({ ipos: state.ipos }),
    }
  )
);
