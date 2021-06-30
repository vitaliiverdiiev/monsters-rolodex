import React from "react";
import x from "./card.module.scss";

const Card = ({ monster }) => {
  return (
    <div className={x.Card}>
      <img
        src={`https://robohash.org/${monster.id}/set=set2&size=180x180`}
        alt={`Monster ${monster.id}`}
      />
      <h2>{monster.name}</h2>
      <p> {monster.email} </p>
    </div>
  );
};

export default Card;
