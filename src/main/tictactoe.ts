export class TicTacToe {
  play(gameMoves: Move[]): string {
    if (gameMoves[0].sign !== "X") {
      return "Invalid starter!";
    }

    for (let i = 0; i < gameMoves.length - 1; i++) {
      if (gameMoves[i].sign === gameMoves[i + 1].sign) {
        return "Invalid move based on previous sign!";
      }
    }

    return "X";
  }
}

export type Move = {
  sign: string;
  placement: string;
};
