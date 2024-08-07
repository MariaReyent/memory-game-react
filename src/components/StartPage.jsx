function StartPage({ begginingGame }) {
  return (
    <div className="startPage">
      <button className="start" onClick={begginingGame}>
        START GAME
      </button>
    </div>
  );
}

export default StartPage;
