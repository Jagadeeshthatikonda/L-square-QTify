import SearchBox from "../SearchBox/SearchBox";
import QtifyIcon from "../Icons/QtifyIcon";
import Button from "../Button/Button";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <QtifyIcon />
      <SearchBox placeholderText={"Search a album of your choice"} />
      <Button buttonText="Give Feedback" />
    </nav>
  );
};

export default Navbar;
