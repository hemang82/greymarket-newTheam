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
  persist((set) => ({

    //IPO
    ipos: [],
    setIPOs: (list) => set({ ipos: list || [] }),
    reset: () => set({ ipos: [] }),

    // News slice (new)
    news: [],
    setNews: (list) => set({ news: list || [] }),
    addNews: (item) => set((s) => ({ news: [...(s.news || []), item] })),
    updateNews: (id, patch) => set((s) => ({ news: (s.news || []).map((n) => (n.id === id ? { ...n, ...patch } : n)), })),
    removeNews: (id) => set((s) => ({ news: (s.news || []).filter((n) => n.id !== id) })),
    resetNews: () => set({ news: [] }),

  }), {
    name: "ipo-store",
    storage: createJSONStorage(() => sessionStorage), // per-tab persistence
    partialize: (state) => ({ ipos: state.ipos }),
  }
  )
);
