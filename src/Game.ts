/*
 * File: Game.ts
 * Created Date: Friday February 28th 2025 01:16:20
 * Author: ristoxxx@github.com
 * -----
 * Last Modified: Friday February 28th 2025 01:16:24
 * Modified By: ristoxxx@github.com
 * -----
 * Copyright (c) 2025 ristoxxx@github.com
 */

export type Cell = "#" | "_" | "¤" | number;
export type Board = Cell[][];

export function generateGameBoard(width: number, height: number, mineCount: number): Board {
  // Alustetaan tyhjä kenttä
  let board: Board = Array.from({ length: height }, () => Array(width).fill("#"));

  // Sijoitetaan miinat satunnaisiin paikkoihin
  let placedMines = 0;
  while (placedMines < mineCount) {
    let x = Math.floor(Math.random() * width);
    let y = Math.floor(Math.random() * height);

    if (board[y][x] !== "¤") {
      board[y][x] = "¤";
      placedMines++;
    }
  }

  // Lasketaan miinojen viereiset numerot
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (board[y][x] === "¤") continue;

      let adjacentMines = 0;
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          if (dx === 0 && dy === 0) continue;
          let newX = x + dx;
          let newY = y + dy;
          if (newX >= 0 && newY >= 0 && newX < width && newY < height && board[newY][newX] === "¤") {
            adjacentMines++;
          }
        }
      }

      board[y][x] = adjacentMines > 0 ? adjacentMines : "#"; // "Tyhjä" ruutu on avaamaton
    }
  }

  console.log(printBoard(board));
  return board;
}

// Funktio pelikentän tulostamiseen konsoliin
export function printBoard(board: Board): string {
  return board.map((row) => row.join(" ")).join("\n");
}
