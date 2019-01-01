import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

const renderSongs = ({ songs, selectSong }) => {
  return songs.map(song => {
    return (
      <div key={song.title} className="item">
        <div className="right floated content">
          <div className="ui button" onClick={() => selectSong(song)}>
            Select
          </div>
        </div>
        <div className="content">{song.title}</div>
      </div>
    );
  });
};

const songs = props => {
  return (
    <div className="ui middle aligned divided list">{renderSongs(props)}</div>
  );
};

const mapStateToProps = ({ songs }) => {
  return { songs };
};

export default connect(
  mapStateToProps,
  {selectSong}
)(songs);
