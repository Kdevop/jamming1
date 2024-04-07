import React, {useState, useCallback} from "react";
import styles from './SearchBar.module.css';

function SearchBar (props) {
  const [term, setTerm] = useState('')

  // function passTerm() {
  //   props.onSearch(term)
  // }

  const search = useCallback(() => {
    props.onSearch(term);
  }, [props.onSearch, term]);

  const handleTermChange = useCallback((event) => {
    setTerm(event.target.value);
  }, []);

    return (
        <div className={styles.SearchBar}>
        <input
          placeholder="Enter A Song, Album, or Artist"
          onChange={handleTermChange}
        />
        <button className={styles.SearchButton} onClick={search}>
          SEARCH
        </button>
      </div>
        );
}

export default SearchBar;