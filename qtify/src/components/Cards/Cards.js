import React from "react";
import styles from "./Cards.module.css";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

function Cards({ cardData, type, changeSong }) {
  function defaultCard() {
    const cardData = {};
    cardData.img = require("../../assets/CardImageBollySongs.png");

    cardData.title = "New Bollwood";

    cardData.followers = "100";
    return cardData;
  }

  function handleClickSongCard(e) {
    changeSong(cardData);
  }

  if (!cardData) cardData = defaultCard();

  return (
    <>
      {type === "albums" && (
        <Link to={`/album/${cardData.slug}`} className={styles.cardLink}>
          <Tooltip title={`${cardData.songs.length} songs`} placement="top">
            <div id={cardData.id} className={styles.card}>
              <div className={styles.cardContent}>
                <img
                  className={styles.cardImg}
                  src={cardData.image}
                  alt="card_pic"
                />
                <div className={styles.albumFollowers}>
                  <p className={styles.aFollo_Text}>{`${(
                    Number(cardData.follows) / 1000
                  ).toFixed(1)}k Follows`}</p>
                </div>
              </div>
              <div className={styles.cardTitle}>
                <p>{`${cardData.title}`}</p>
              </div>
            </div>
          </Tooltip>
        </Link>
      )}
      {type === "songs" && (
        <div
          onClick={handleClickSongCard}
          id={cardData.id}
          className={styles.card}
        >
          <div className={styles.cardContent}>
            <img
              className={styles.cardImg}
              src={cardData.image}
              alt="card_pic"
            />
            <div className={styles.albumFollowers}>
              <p className={styles.aFollo_Text}>{`${(
                Number(cardData.likes) / 1000
              ).toFixed(1)}k Likes`}</p>
            </div>
          </div>
          <div className={styles.cardTitle}>
            <p>{`${cardData.title}`}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default Cards;
