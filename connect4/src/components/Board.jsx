import Cell from "./Cell";

export default function Board({ board, handleClick }) {
  return (
    <div>
      {board.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex" }}>
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => handleClick(colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
