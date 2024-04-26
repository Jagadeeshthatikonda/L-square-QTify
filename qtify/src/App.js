import React, { useState, useEffect } from "react";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero.jsx";
import {
  getTopAlbums,
  getNewAlbums,
  getSongs,
  getGenresData,
} from "./apis/apis.js";
import Section from "./components/Section/Section.jsx";
import GenreTabs from "./components/GenreTabs/GenreTabs.jsx";

function App() {
  const [topAlbumSongs, setTopAlbumSongs] = useState([]);
  const [newAlbumSongs, setNewAlbumSongs] = useState([]);
  const [selectedGenreSongs, setSelectedGenreSongs] = useState([""]);
  const [genresData, setGenresData] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);

  const getTopAlbumSongs = async () => {
    try {
      const topAlbumSongs = await getTopAlbums();
      setTopAlbumSongs(topAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getNewAlbumSongs = async () => {
    try {
      const newAlbumSongs = await getNewAlbums();
      setNewAlbumSongs(newAlbumSongs);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getTabSelectedSongs = async () => {
    try {
      const songsResponse = await getSongs();
      setSelectedGenreSongs(songsResponse);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const getGenres = async () => {
    try {
      const response = await getGenresData();
      const allTab = {
        key: "all",
        label: "All",
      };

      setGenresData([allTab, ...response.data]);
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getTopAlbumSongs();
    getNewAlbumSongs();
    getTabSelectedSongs();
    getGenres();
  }, []);

  const handleSelectedTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const filterSongs = tab => {
    if (tab === 0) {
      return selectedGenreSongs;
    } else {
      const result = selectedGenreSongs.filter(
        song => song.genre.key === genresData[tab].key
      );
      return result;
    }
  };

  const renderTabs = () => (
    <GenreTabs
      genresData={genresData}
      selectedTab={selectedTab}
      handleSelectedTab={handleSelectedTab}
    />
  );

  return (
    <div className={styles.App}>
      <Navbar />
      <div className={styles.appContent}>
        <Hero />
        <div className={styles.sectionWrapper}>
          <Section
            type="album"
            title="Top Albums"
            data={topAlbumSongs}
            customClassName={styles.sectionPadding}
          />
          <Section
            type="album"
            title="New Albums"
            data={newAlbumSongs}
            customClassName={styles.sectionPadding}
          />
          <Section
            type="album"
            title="Songs"
            data={filterSongs(selectedTab)}
            shouldShowExpandAction={false}
            renderCustomCardsListHeader={renderTabs}
            customClassName={`${styles.songsAlbum} ${styles.sectionPadding}`}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
