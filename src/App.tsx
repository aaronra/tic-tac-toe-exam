import React, { FC, useState } from "react";
import PlayGround from "./components/PlayGround";
const App: FC = () => {
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const [history, setHistory] = useState([{ boxes: Array(25).fill(null) }]);
  const current = history[stepNumber];

  const getWinner = (playingBoxes: any) => {
    const linesCombinationList = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    for (let i = 0; i < linesCombinationList.length; i++) {
      const [a, b, c, d, e] = linesCombinationList[i];
      if (
        playingBoxes[a] &&
        playingBoxes[a] === playingBoxes[b] &&
        playingBoxes[b] === playingBoxes[c] &&
        playingBoxes[c] === playingBoxes[d] &&
        playingBoxes[d] === playingBoxes[e]
      ) {
        return playingBoxes[a];
      }
    }

    return null;
  };

  const winner = getWinner(current.boxes);

  const moves = history.map((step, move) => {
    const desc = move ? "Move #" + move : "Start the Game";
    return (
      <li key={move}>
        <button
          onClick={() => {
            jumpTo(move);
          }}
        >
          {desc}
        </button>
      </li>
    );
  });
  let status;
  if (winner) {
    status = "Winner is " + winner;
  } else {
    status = "Next Player is " + (xIsNext ? "X" : "O");
  }

  const jumpTo = (step: any) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const handleClick = (i: number) => {
    const newHistory = history.slice(0, stepNumber + 1);
    const current = newHistory[newHistory.length - 1];
    const boxes = current.boxes.slice();
    const winner = getWinner(boxes);
    if (winner || boxes[i]) {
      return;
    }
    boxes[i] = xIsNext ? "X" : "O";

    setHistory(
      newHistory.concat({
        boxes: boxes,
      })
    );
    setXIsNext(!xIsNext);
    setStepNumber(newHistory.length);
  };

  return (
    <div className="App">
      <div className="game">
        <h1>{status}</h1>
        <PlayGround onClick={(i) => handleClick(i)} boxes={current.boxes} />

        <div className="game-info">
          <ul>{moves}</ul>
        </div>
      </div>
    </div>
  );
};

export default App;
