import React from "react";
import styles from './SearchResults.module.css';
import Tracklist from "../Tracklist/Tracklist";

function SearchResults (props) {
    return (
        <div className={styles.SearchResults}>
          <h2>Results</h2>
        {/* <!-- Add a TrackList component --> */}
        <Tracklist tracks={props.searchResults} isRemoval={false} onAdd={props.onAdd}/>
      </div>
        );
}

export default SearchResults;