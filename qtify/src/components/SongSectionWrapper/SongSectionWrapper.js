import React, { useEffect, useState } from "react";
import Section from "../Section/Section";
import axios from "axios";

function SongSectionWrapper({ songs, song, changeSong }) {
  const [genres, setGenres] = useState([]);
  // const [songs, setSongs] = useState([]);

  function filterByType(genre, data) {
    if (genre.key === "all") return false;
    const filteredSongs = data.filter((song) => song.genre.key === genre.key);
    return filteredSongs;
  }

  // const fetchAlbums = async () => {
  //   try {
  //     const songs = await axios.get("https://qtify-backend-labs.crio.do/songs");

  //     setSongs(songs.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  async function fetchGenre() {
    try {
      const genresData = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );

      setGenres([{ key: "all", label: "All" }, ...genresData.data.data]);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // fetchAlbums();
    fetchGenre();
  }, []);

  return (
    <div>
      <Section
        changeSong={changeSong}
        data={songs}
        sectionType={"songs"}
        title={"Songs"}
        filterFunction={filterByType}
        filtersData={genres}
      />
    </div>
  );
}

export default SongSectionWrapper;
