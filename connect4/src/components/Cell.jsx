export default function Cell({ value, onClick }) {
 
  const colors = {
    player1: "red",
    player2: "yellow",
    null: "white",
  };

  return (
    <div
      onClick={onClick}
      style={{
        width: 50,
        height: 50,
        backgroundColor: colors[value],
        border: "1px solid black",
        borderRadius: "50%",
        display: "inline-block",
        margin: 2,
        cursor: "pointer",
      }}
    ></div>
  );
}