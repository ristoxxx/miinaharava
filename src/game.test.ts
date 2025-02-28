/*
 * File: Game.test.ts
 * Created Date: Friday February 28th 2025 01:15:28
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Friday February 28th 2025 01:15:49
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

import { generateGameBoard } from "./game";

describe("Game Board Generation", () => {
  test("should create a 10x10 board", () => {
    const board = generateGameBoard(10, 10, 10);
    expect(board.length).toBe(10);
    expect(board.every((row) => row.length === 10)).toBe(true);
  });

  test("should place the correct number of mines", () => {
    const board = generateGameBoard(10, 10, 10);
    const mineCount = board.flat().filter((cell) => cell === "¤").length;
    expect(mineCount).toBe(10);
  });

  test("should calculate adjacent mine numbers correctly", () => {
    const board = generateGameBoard(3, 3, 1); // Pieni testikenttä
    const minePositions = board.flatMap((row, y) =>
      row.map((cell, x) => (cell === "¤" ? [x, y] : null)).filter(Boolean)
    );

    expect(minePositions.length).toBe(1); // Tarkistetaan, että vain yksi miina on asetettu
    const [mineX, mineY] = minePositions[0]!; // Haetaan miinan koordinaatit

    // Tarkistetaan, että naapuriruudut saavat oikeat numerot
    for (let y = mineY - 1; y <= mineY + 1; y++) {
      for (let x = mineX - 1; x <= mineX + 1; x++) {
        if (x >= 0 && y >= 0 && x < 3 && y < 3 && board[y][x] !== "¤") {
          expect(typeof board[y][x]).toBe("number");
          expect(board[y][x]).toBeGreaterThanOrEqual(1);
        }
      }
    }
  });
});
