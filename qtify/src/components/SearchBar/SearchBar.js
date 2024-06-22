import React from "react";
import Button from "../Button/Button";
// import InputsField from "../InputField/InputsField";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchBar.module.css";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
import SearchListItem from "./SearchListItem";
import { useNavigate } from "react-router-dom";

function SearchBar({ data }) {
  // console.log("11111111111111111");

  const navigate = useNavigate();
  // const albums = data;

  function handleSearchClick(e) {
    e.preventDefault();

    const searchStr = e.target.elements["search_input"].value;
    const dt = data.find((album) => {
      return album.title.toLowerCase().includes(searchStr.toLowerCase());
    });
    // console.log(dt);
    if (dt) {
      navigate(`/album/${dt.slug}`);
      e.target.elements["search_input"].value = "";
    } else console.log(`no Album found with name "${searchStr}"`);
  }

  const {
    getRootProps,
    getInputLabelProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: "use-autocomplete-demo",
    options: data || [],
    getOptionLabel: (option) => {
      if (!option) return "";
      return option.title;
    },
  });

  const Listbox = styled("ul")(({ theme }) => ({
    width: "100%",
    maxWidth: "727px",
    margin: 0,
    listStyle: "none",
    backgroundColor: "var(--color-black)",
    overflow: "auto",
    maxHeight: 200,
    color: "var(--color-white)",
    border: "1px solid rgba(0,0,0,.25)",
    "& li.Mui-focused": {
      //   backgroundColor: "#4a8df6",
      backgroundColor: "var(--color-primary)",
      color: "white",
      cursor: "pointer",
    },
    "& li:active": {
      //   backgroundColor: "#2977f5",
      backgroundColor: "var(--color-primary)",
      color: "white",
    },
  }));

  return (
    <div className={styles.searchBar_container}>
      <form
        onSubmit={handleSearchClick}
        className={styles.search_bar}
        {...getRootProps()}
      >
        <input
          className={styles.searchInput}
          name="search_input"
          type="text"
          placeholder={"Search an album of your choice"}
          {...getInputProps()}
        />
        <Button other className={styles["search-btn"]}>
          <FaSearch />
        </Button>
      </form>

      {groupedOptions.length > 0 ? (
        <Listbox className={styles.listSeacrh} {...getListboxProps()}>
          {groupedOptions.map((album, index) => (
            // <li {...getOptionProps({ option, index })}>{option.title}</li>
            <li {...getOptionProps({ album, index })}>
              <SearchListItem album={album} />
            </li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

// const top100Films = [
//   { title: "The Shawshank Redemption", year: 1994 },
//   { title: "The Godfather", year: 1972 },
//   { title: "The Godfather: Part II", year: 1974 },
//   { title: "The Dark Knight", year: 2008 },
//   { title: "12 Angry Men", year: 1957 },
//   { title: "Schindler's List", year: 1993 },
//   { title: "Pulp Fiction", year: 1994 },
// ];

export default SearchBar;
