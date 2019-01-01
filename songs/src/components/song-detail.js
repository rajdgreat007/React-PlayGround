import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  return (
    selectedSong && (
      <div className="ui card">
        <div className="content">
          <div className="header">{selectedSong.title}</div>
        </div>
        <div className="content">
          <h4 className="ui sub header">Duration : {selectedSong.duration}</h4>
        </div>
      </div>
    )
  );
};

const mapStateToProps = ({ selectedSong }) => {
  return {
    selectedSong
  };
};

export default connect(mapStateToProps)(SongDetail);
