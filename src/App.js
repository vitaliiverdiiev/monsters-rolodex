import React, { useState, useEffect } from "react";
import CardList from "./components/card-list/card-list";
import Search from "./components/search-box/search-box";
import "./App.css";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );

  const searchMonsters = (e) => {
    setSearchField(e.target.value);
  };

  return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <Search searchMonsters={(e) => searchMonsters(e)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
