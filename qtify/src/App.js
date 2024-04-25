import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import { triggerGetTopAlbumsAPI } from "./apis/apis.js";
import Section from "./components/Section/Section.jsx";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);

  const getTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await triggerGetTopAlbumsAPI();
      setTopAlbumSongs(topAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getTopAlbumSongs();
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
      </div>
    </div>
  );
}

export default App;
