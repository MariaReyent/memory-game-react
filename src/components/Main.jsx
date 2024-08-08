import Card from "./Card";

function Main({ handleCardClick, shuffleCards, win, endGame, newGame }) {
  return (
    <>
      <div className="rulesContainer">
        <h1 className="rules"> Don't click on the same card twice!</h1>
      </div>

      <div className="cardGrid">
        {shuffleCards.map((pokemon, i) => {
          return (
            <Card
              key={i}
              src={pokemon.src}
              handleCardClick={() => handleCardClick(i)}
            />
          );
        })}
      </div>
      {endGame && (
        <div className="modal">
          {win ? (
            <h1 className="winHeader">YOU WIN!</h1>
          ) : (
            <h1 className="winHeader">You lose</h1>
          )}
          <button className="restartBtn" onClick={() => newGame()}>
            Restart
          </button>
        </div>
      )}
    </>
  );
}

export default Main;
