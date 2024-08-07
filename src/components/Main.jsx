import { data } from "../data";
import Card from "./Card";

function Main() {
  return (
    <>
      <div className="cardGrid">
        {data.map((pokemon, i) => {
          return <Card key={i} src={pokemon.src} name={pokemon.name} />;
        })}
      </div>
    </>
  );
}

export default Main;
