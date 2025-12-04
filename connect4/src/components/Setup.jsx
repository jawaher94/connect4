import { useState } from "react";

export default function Setup({ onStart }) {
  const [rows, setRows] = useState(6);
  const [cols, setCols] = useState(7);
  const [player1Color, setPlayer1Color] = useState("red");
  const [player2Color, setPlayer2Color] = useState("yellow");

  const colors = ["red", "yellow", "blue", "green", "purple"];

  const startGame = () => {
    if (player1Color === player2Color) {
      alert("Players must choose different colors!");
      return;
    }
    onStart({ rows, cols, player1Color, player2Color });
  };

  return (
    <div style={{ padding: 20, maxWidth: 500, margin: "0 auto" }}>
      <h2>Game Setup</h2>
      <h3>Connect 4</h3>

      
      <div style={{
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '15px',
        textAlign: 'left'
      }}>
        <h4 style={{ margin: '0 0 5px 0' }}>Implemented Features:</h4>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '1.6' }}>
          <li>Choose color for each player</li>
          <li>Set board size (rows and columns)</li>
          <li>Undo button for last move</li>
        </ul>
      </div>

     
      <label>Rows:</label>
      <input type="number" value={rows} onChange={e => setRows(Number(e.target.value))} />

      <br />

      <label>Columns:</label>
      <input type="number" value={cols} onChange={e => setCols(Number(e.target.value))} />

      <br />

      <label>Player 1 Color:</label>
      <select value={player1Color} onChange={e => setPlayer1Color(e.target.value)}>
        {colors.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <br />

      <label>Player 2 Color:</label>
      <select value={player2Color} onChange={e => setPlayer2Color(e.target.value)}>
        {colors.map(c => <option key={c} value={c}>{c}</option>)}
      </select>

      <br /><br />

      <button onClick={startGame}>Start Game</button>
    </div>
  );
}
