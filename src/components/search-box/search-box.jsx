import React from "react";
import x from "./search-box.module.scss";  

const Search = ({ searchMonsters }) => {
  return (
    <input
      className={x.Search}
      onChange={(e) => searchMonsters(e)}
      type="search"
      name="monster"
      id="search-monster"
      placeholder="Search monsters"
    />
  );
};

export default Search;
