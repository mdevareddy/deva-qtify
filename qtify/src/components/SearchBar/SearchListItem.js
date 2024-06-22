import React from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";

function SearchListItem({ album }) {
  return (
    <Link
      style={{ color: "var(--color-white)", textDecoration: "none" }}
      to={`/album/${album.slug}`}
    >
      <div className={styles.listItem}>
        <div className={styles.album_image_artist}>
          <img
            className={styles.album_image}
            src={album.image}
            alt="song thumbnail"
          />
          <div className={styles.album_song_artist}>
            <p className={styles.album_name}>{album.title}</p>
            <p className={styles.song_artist}>
              {album.songs[0].artists.join(",")},...
            </p>
          </div>
        </div>
        <div className={styles.albumFollows}>
          <p>{(album.follows / 1000).toFixed(2)}k Follows</p>
        </div>
      </div>
    </Link>
  );
}

export default SearchListItem;
