import React from "react";

import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";

import styles from "./Search.module.css";

const Search = props => {
  return (
    <form className={styles.container}>
      <input className={styles.searchInput} placeholder={props.search} />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
