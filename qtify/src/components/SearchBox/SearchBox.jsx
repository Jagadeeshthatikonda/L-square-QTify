import React from "react";

import SearchIcon from "../Icons/SearchIcon";

import styles from "./SearchBox.module.css";

const Search = props => {
  return (
    <form className={styles.container}>
      <input
        className={styles.searchInput}
        placeholder={props.placeholderText}
      />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
