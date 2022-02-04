import { Move, TicTacToe } from "../main/tictactoe";

let gameMoves: Move[] = [
  { sign: "X", placement: "BL" },
  { sign: "O", placement: "BC" },
  { sign: "X", placement: "BR" },
  { sign: "O", placement: "ML" },
];

describe("TicTacToe test", () => {
  let ticTacToe: TicTacToe = new TicTacToe();

  it("should be that first placement is X", () => {
    expect(ticTacToe.play(gameMoves)).toBeTruthy();
  });

  it("should be the current move is not the same with the previous move", () => {
    expect(ticTacToe.play(gameMoves)).toBeTruthy();
  });
});

//test
// place letter,
//BL, BC, BR
//ML, MC, MR
//TL,TC,TR
