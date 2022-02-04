import { Move, TicTacToe } from "../main/tictactoe";

let invalidStartingGameMove: Move[] = [{ sign: "0", placement: "BL" }];

let invalidMoveBasedOnPreviousSign: Move[] = [
  { sign: "X", placement: "BL" },
  { sign: "X", placement: "ML" },
  { sign: "X", placement: "BC" },
  { sign: "0", placement: "BC" },
  { sign: "X", placement: "BR" },
];

describe("TicTacToe test", () => {
  let ticTacToe: TicTacToe = new TicTacToe();

  it("should start with X", () => {
    expect(ticTacToe.play(invalidStartingGameMove)).toEqual("Invalid starter!");
  });

  it("should be the current move is not the same with the previous move", () => {
    expect(ticTacToe.play(invalidMoveBasedOnPreviousSign)).toEqual(
      "Invalid move based on previous sign!"
    );
  });

  it("should be on a new placement", () => {
    expect(ticTacToe.play(invalidMoveBasedOnPreviousSign)).toEqual(
      "Invalid placement!"
    );
  });
});

//test
// place letter,
//BL, BC, BR
//ML, MC, MR
//TL,TC,TR
