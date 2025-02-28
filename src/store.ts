/*
 * File: store.ts
 * Created Date: Friday February 28th 2025 12:22:13
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Friday February 28th 2025 12:22:26
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

import { create } from "zustand";

interface GameState {
  grid: number[][]; // Pelilauta
  revealShape: number[][]; // Nykyinen paljastusmuoto (Tetris-palikka)
  setGrid: (newGrid: number[][]) => void;
  setRevealShape: (shape: number[][]) => void;
}

export const useGameStore = create<GameState>((set) => ({
  grid: Array(10).fill(Array(10).fill(0)), // Esimerkki 10x10 kentästä
  revealShape: [[1, 1], [1, 1]], // Esimerkki 2x2 palikasta
  setGrid: (newGrid) => set({ grid: newGrid }),
  setRevealShape: (shape) => set({ revealShape: shape }),
}));


