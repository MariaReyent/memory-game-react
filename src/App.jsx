import Main from "./components/Main";
import StartPage from "./components/StartPage";
import { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [win, setWin] = useState(false);
  const [endGame, setEndgame] = useState(false);
  const [shuffleCards, setShuffleCards] = useState(data);
  const [clickedId, setClickedId] = useState([]);

  const handleCardClick = (id) => {
    setClickedId((prev) => {
      if (!prev.includes(id)) {
        console.log("clicked");
        return [...prev, id];
      } else {
        console.log("You lose!");

        setEndgame(true);
        setWin(false);
        return prev;
      }
    });
    checkWin();
    randomCardPos();
  };

  const randomCardPos = () => {
    const shuffle = [...shuffleCards].sort(() => Math.random() - 0.5);
    setShuffleCards(shuffle);
  };

  const begginingGame = () => {
    setStartGame(true);
  };

  const checkWin = () => {
    if (clickedId.length === shuffleCards.length - 1) {
      setWin(true);
      setEndgame(true);
    }
  };

  const newGame = () => {
    setClickedId([]);
    setWin(false);
    setEndgame(false);
  };

  console.log(clickedId);

  return (
    <>
      {startGame ? (
        <Main
          startGame={startGame}
          handleCardClick={handleCardClick}
          shuffleCards={shuffleCards}
          win={win}
          endGame={endGame}
          newGame={newGame}
        />
      ) : (
        <StartPage startGame={startGame} begginingGame={begginingGame} />
      )}
    </>
  );
}

export default App;
