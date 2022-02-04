export class TicTacToe {
  play(gameMoves: Move[]) {
    const firstMove: string = gameMoves[0].sign;
    return firstMove === "X";
  }
}

export type Move = {
  sign: string;
  placement: string;
};
