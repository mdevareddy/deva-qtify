import React, { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Button from "../Button/Button";
import CardsCarousel from "../CardsCarousel/CardsCarousel";
import CardsGrid from "../CardsGrid/CardsGrid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// SongData = data
// filter true false
//  filters, setFilters =  genres, setGenres
// data => data fetched by api
// filtersData => data which tell the types of filters
// SectionTYpe => determines the card type
// title => title of section
// filterFunction => function to filter data

function Section({
  data,
  filtersData,
  sectionType,
  title,
  filterFunction,
  changeSong,
}) {
  const [collapse, setCollapse] = useState(true);
  const [value, setValue] = React.useState(0);

  const [filteredData, setFilteredData] = useState(false);

  // const tabStyles = {
  //   color: "var(--color-white)",
  //   padding: "0.25rem 0.25rem",
  //   minHeight: "2.125rem",
  //   minWidth: "4.25rem",
  //   fontWeight: "600",
  //   fontFamily: '"Poppins", sans-serif',
  //   letterSpacing: "1px",
  // };

  function handleClickCollapse(e) {
    console.log(collapse);
    setCollapse(!collapse);
  }

  function a11yProps(index) {
    return {
      id: `filter-tab-${index}`,
    };
  }
  function handleChange(e, newValue) {
    console.log(e.target.id.split("-")[2]);
    setValue(newValue);
    console.log(newValue);
    setFilteredData(
      filterFunction(filtersData[e.target.id.split("-")[2]], data)
    );
  }

  return (
    <div className={`${styles.section}`}>
      <div className={`${styles.sec_title_action}`}>
        <p className={`${styles.sec_title}`}>{title}</p>
        <Button secondary onClick={handleClickCollapse}>
          {collapse ? "Show All" : "Collapse"}
        </Button>
      </div>
      {filtersData && (
        <div className={styles.typeFilter}>
          <Tabs
            style={{ minHeight: "36px" }}
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "var(--color-primary)",
              },
            }}
            className={styles.tab}
          >
            {filtersData.map((genre, i) => {
              return (
                <Tab
                  // style={tabStyles}
                  className={styles.tabStyles}
                  key={genre.key}
                  label={genre.label}
                  {...a11yProps(i)}
                />
              );
            })}
          </Tabs>
        </div>
      )}

      {collapse ? (
        <CardsCarousel
          data={filteredData || data}
          cardType={sectionType}
          changeSong={changeSong}
        />
      ) : (
        <CardsGrid
          data={filteredData || data}
          cardType={sectionType}
          changeSong={changeSong}
        />
      )}
    </div>
  );
}

export default Section;
