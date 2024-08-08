import { data } from "../data";
import Card from "./Card";

function Main({ handleCardClick }) {
  return (
    <>
      <div className="cardGrid">
        {data.map((pokemon, i) => {
          return (
            <Card
              key={i}
              src={pokemon.src}
              handleCardClick={() => handleCardClick(i)}
            />
          );
        })}
      </div>
    </>
  );
}

export default Main;
