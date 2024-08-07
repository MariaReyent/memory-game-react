import Main from "./components/Main";
import StartPage from "./components/StartPage";
import { useEffect, useState } from "react";

function App() {
  const [startGame, setStartGame] = useState(false);

  const begginingGame = () => {
    setStartGame(true);
  };

  // useEffect(() => {
  //   begginingGame();
  // }, []);

  return (
    <>
      {startGame ? (
        <Main startGame={startGame} />
      ) : (
        <StartPage startGame={startGame} begginingGame={begginingGame} />
      )}
    </>
  );
}

export default App;
