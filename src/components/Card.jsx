function Card({ src, id, name, handleCardClick }) {
  return (
    <div
      id={id}
      name={name}
      className="cardContainer"
      onClick={() => handleCardClick(id)}
    >
      <div className="side front">
        <img src={src} />
      </div>
      <div className="side back">
        <img src="images/back.png" />
      </div>
    </div>
  );
}

export default Card;
