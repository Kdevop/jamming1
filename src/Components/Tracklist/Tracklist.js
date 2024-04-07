import React from "react";
import styles from './Tracklist.module.css';
import Track from '../Track/Track';

function Tracklist(props) {
    return (
        <div className={styles.TrackList}>
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {props.tracks.map((track) => {
            return (
                <Track 
                track={track}
                key={track.id}
                onAdd={props.onAdd}
                isRemoval={props.isRemoval}
                onRemove={props.onRemove}
                />
            )
        })}

      </div>
    );
}

export default Tracklist;