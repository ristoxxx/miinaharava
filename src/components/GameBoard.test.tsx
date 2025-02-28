/*
 * File: GameBoard.test.tsx
 * Created Date: Friday February 28th 2025 12:53:47
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Friday February 28th 2025 12:54:39
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

import { render, screen } from "@testing-library/react";
import { useGameStore } from "../store";

test("initial game state is correct", () => {
  const { grid, revealShape } = useGameStore.getState();
  expect(grid.length).toBe(10);
  expect(revealShape).toEqual([[1, 1], [1, 1]]);
});
