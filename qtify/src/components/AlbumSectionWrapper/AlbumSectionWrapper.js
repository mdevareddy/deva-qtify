import React, { useState, useEffect } from "react";
import Section from "../Section/Section";
import axios from "axios";

function AlbumSectionWrapper({ topAlbums, newAlbums }) {
  // const [topAlbums, setTopAlbums] = useState([]);
  // const [newAlbums, setNewAlbums] = useState([]);

  // console.log(data);

  // const fetchAlbums = async () => {
  //   try {
  //     const topAlbums = await axios.get(
  //       "https://qtify-backend-labs.crio.do/albums/top"
  //     );
  //     const newAlbums = await axios.get(
  //       "https://qtify-backend-labs.crio.do/albums/new"
  //     );

  //     setTopAlbums(topAlbums.data);
  //     setNewAlbums(newAlbums.data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  // useEffect(() => {
  //   fetchAlbums();
  // }, []);

  return (
    <div>
      <Section data={topAlbums} title={"Top Albums"} sectionType={"albums"} />
      <Section data={newAlbums} title={"New Albums"} sectionType={"albums"} />
    </div>
  );
}

export default AlbumSectionWrapper;
