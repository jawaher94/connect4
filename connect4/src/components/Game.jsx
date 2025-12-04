import { useState } from "react";

export default function Game({ settings }) {
  const { rows, cols, player1Color, player2Color } = settings;

  const [board, setBoard] = useState(() =>
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => null)
    )
  );

  const [currentPlayer, setCurrentPlayer] = useState("player1");
  const [winner, setWinner] = useState(null);

  const [lastMove, setLastMove] = useState(null); 
  const [undoAvailable, setUndoAvailable] = useState(false); 

  const colors = {
    player1: player1Color,
    player2: player2Color,
    null: "white",
  };


  const handleClick = (colIndex) => {
    if (winner) return;

    for (let row = rows - 1; row >= 0; row--) {
      if (!board[row][colIndex]) {
        const newBoard = board.map(r => [...r]);

        setLastMove({
          board: board.map(r => [...r]),
          currentPlayer: currentPlayer
        });

        newBoard[row][colIndex] = currentPlayer;
        setBoard(newBoard);

       
        setUndoAvailable(true);
        setTimeout(() => setUndoAvailable(false), 5000);

       
        setCurrentPlayer(currentPlayer === "player1" ? "player2" : "player1");

        
        checkWinner(newBoard, row, colIndex);
        break;
      }
    }
  };

  
  const checkWinner = (board, row, col) => {
    const player = board[row][col];


    let count = 0;
    for (let c = 0; c < cols; c++) {
      count = board[row][c] === player ? count + 1 : 0;
      if (count === 4) {
        setWinner(player);
        return;
      }
    }

  
    count = 0;
    for (let r = 0; r < rows; r++) {
      count = board[r][col] === player ? count + 1 : 0;
      if (count === 4) {
        setWinner(player);
        return;
      }
    }

    
    let startRow = row;
    let startCol = col;
    while (startRow > 0 && startCol > 0) {
      startRow--;
      startCol--;
    }
    count = 0;
    while (startRow < rows && startCol < cols) {
      count = board[startRow][startCol] === player ? count + 1 : 0;
      if (count === 4) {
        setWinner(player);
        return;
      }
      startRow++;
      startCol++;
    }


    startRow = row;
    startCol = col;
    while (startRow > 0 && startCol < cols - 1) {
      startRow--;
      startCol++;
    }
    count = 0;
    while (startRow < rows && startCol >= 0) {
      count = board[startRow][startCol] === player ? count + 1 : 0;
      if (count === 4) {
        setWinner(player);
        return;
      }
      startRow++;
      startCol--;
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Connect 4</h2>

      {winner ? (
        <h2 style={{ color: "green" }}>
           Player {winner === "player1" ? "1" : "2"} Wins! 
        </h2>
      ) : (
        <h3>Current Turn: {currentPlayer === "player1" ? "1" : "2"}</h3>
      )}

      
      {undoAvailable && !winner && (
        <button
          onClick={() => {
            if (lastMove) {
              setBoard(lastMove.board);
              setCurrentPlayer(lastMove.currentPlayer);
              setUndoAvailable(false);
              setLastMove(null);
            }
          }}
          style={{ margin: "10px", padding: "5px 10px" }}
        >
          UNDO
        </button>
      )}

     
      <div>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: "flex" }}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                onClick={() => {
                  if (!winner) handleClick(colIndex);
                }}
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: colors[cell],
                  border: "1px solid black",
                  borderRadius: "50%",
                  display: "inline-block",
                  margin: 2,
                  cursor: winner ? "not-allowed" : "pointer",
                }}
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}










