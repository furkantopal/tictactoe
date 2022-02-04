import { Move, TicTacToe } from "../main/tictactoe";

let invalidStartingGameMove: Move[] = [{ sign: "0", placement: "BL" }];

let invalidMoveBasedOnPreviousSign: Move[] = [
  { sign: "X", placement: "BL" },
  { sign: "O", placement: "CM" },
  { sign: "X", placement: "BL" },
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

//test 1 = if sign array [0] <> X then error
//test 2 = if sign [current] = sign [previous] then invalid sign
//test 3 = if placement exists in placement array then "invalid placement"
//test 4 = if (TL,TM,TR) = sign then "winner"
//test 5 = if (CL,CM,CR) = sign then "winner"
//Test 6 = if (BL,BM,BR,) = sign then winner
//Test 7 = if (TL,CL,BL) = sign then winner
//Test 8 = if (TR,CR,BR) = sign then winner
//Test 9 = if (BL,CM,TR) = sign then winner
//test 10 = if (BR,CM,TL) = sign then winner

//test
// place letter,
//BL, BC, BR
//ML, MC, MR
//TL,TC,TR

//test
