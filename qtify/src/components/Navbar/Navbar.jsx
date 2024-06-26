import LogoImage from "../../assets/Logo.png";

import SearchBox from "../Search/Search";
import Button from "../Button/Button";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoStyles}>
        <img src={LogoImage} alt="logo" width={67} />
      </div>
      <SearchBox search={"Search a album of your choice"} />
      <Button buttonText="Give Feedback" />
    </nav>
  );
};

export default Navbar;
