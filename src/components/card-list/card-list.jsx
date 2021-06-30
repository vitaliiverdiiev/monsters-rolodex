import React, { useState } from "react";
import Card from "../card/card";
import x from "./card-list.module.scss";

const CardList = ({ monsters }) => (
  <div className={x.CardList}>
    {monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
