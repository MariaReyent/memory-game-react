import Main from "./components/Main";
import StartPage from "./components/StartPage";
import { useEffect, useState } from "react";
import { data } from "./data";

function App() {
  const [startGame, setStartGame] = useState(false);
  const [win, setWin] = useState(0);
  const [shuffleCards, setShuffleCards] = useState(data);
  const [clickedId, setClickedId] = useState([]);

  const handleCardClick = (id) => {
    setClickedId((prev) => {
      if (!prev.includes(id)) {
        console.log("clicked");
        randomCardPos();
       
        return [...prev, id];
      } else {
        console.log("alredy clicked");
        return prev;
      }
    });
  };

  

  const randomCardPos = () => {
    const shuffle = [...shuffleCards].sort(() => Math.random() - 0.5);
    setShuffleCards(shuffle);
  };

  const begginingGame = () => {
    setStartGame(true);
  };

  const newGame = () => {
    setWin(0);
  };

  return (
    <>
      {startGame ? (
        <Main startGame={startGame} handleCardClick={handleCardClick} />
      ) : (
        <StartPage startGame={startGame} begginingGame={begginingGame} />
      )}
    </>
  );
}

export default App;
