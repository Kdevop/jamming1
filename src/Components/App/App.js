import React, { useState, useCallback } from "react";
import styles from './App.module.css';
import SearchResults from "../SearchResults/SearchResults";
import Playlist from '../Playlist/Playlist';
import SearchBar from '../SearchBar/SearchBar';
import Spotify from '../../util/Spotify/Spotify';

function App() {
  const [searchResults, setSearchResults] = useState(
    [{
      name: 'example track 1',
      artist: 'example artist 1',
      album: 'example album 1',
      id: 'example id 1',
    },
    {
      name: 'example track 2',
      artist: 'example artist 2',
      album: 'example album 2',
      id: 'example id 2',
    }]
  );
  const [playlistName, setPlaylistName] = useState('Example Playlist Name');
  const [playlistTracks, setPlaylistTracks] = useState(
    [
      {
        name: 'Example Playlist Name 1',
        artist: 'Example Playlist Artist 1',
        ablumb: 'Example Playlist Album 1',
        id: '1',
      },
      {
        name: 'Example Playlist Name 2',
        artist: 'Example Playlist Artist 2',
        ablumb: 'Example Playlist Album 2',
        id: '2',
      },
      {
        name: 'Example Playlist Name 3',
        artist: 'Example Playlist Artist 3',
        ablumb: 'Example Playlist Album 3',
        id: '3',
      },
    ]
  );

  function addTrack(track) {
    const existingTrack = playlistTracks.find(t => t.id === track.id);
    const newTrack = playlistTracks.concat(track);
    if (existingTrack) {
      console.log('Track already in playlist');
    } else {
      setPlaylistTracks(newTrack);
    }
  }

  function removeTrack(track) {
    const existingTrack = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(existingTrack);
  }

  function updatePlaylistName(name) {
    setPlaylistName(name);
  }

  function savePlaylist() {
    const trackURIs = playlistTracks.map((t) => t.uri);
    Spotify.savePlaylist(playlistName, trackURIs).then(() => {
      setPlaylistName('New Playlist')
      setPlaylistTracks([]);
    });
  }

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
  }, []);

  return (
    <div>
      <h1>
        Ja<span className={styles.highlight}>mmm</span>ing
      </h1>
      <div className={styles.App}>
        {/* <!-- Add a SearchBar component --> */}
        <SearchBar onSearch={search} />

        <div className={styles['App-playlist']}>
          {/* <!-- Add a SearchResults component --> */}
          <SearchResults
            searchResults={searchResults}
            onAdd={addTrack}
          />

          {/* <!-- Add a Playlist component --> */}
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}

export default App;