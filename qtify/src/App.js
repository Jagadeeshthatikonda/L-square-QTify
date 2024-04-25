import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import {
  triggerGetTopAlbumsAPI,
  triggerGetNewAlbumsAPI,
} from "./apis/apis.js";
import Section from "./components/Section/Section.jsx";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);

  const getTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await triggerGetTopAlbumsAPI();
      setTopAlbumSongs(topAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await triggerGetNewAlbumsAPI();
      setNewAlbumSongs(newAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getTopAlbumSongs();
    getNewAlbumSongs();
  }, []);

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <div className={styles.sectionWrapper}>
        <Section type="album" title="Top Albums" data={topAlbumSongs} />
        <Section type="album" title="New Albums" data={newAlbumSongs} />
      </div>
    </div>
  );
}

export default App;
