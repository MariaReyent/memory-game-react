function Card({ src }) {
  return (
    <div className="cardContainer">
      <div className="side front">
        <img src={src} />

        <div className="side back">
          <img src="images/back.png" />
        </div>
      </div>
    </div>
  );
}

export default Card;
