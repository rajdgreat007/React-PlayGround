import { combineReducers } from "redux";
const songs = () => {
  return [
    { title: "song 1", duration: "4:40" },
    { title: "song 2", duration: "4:10" },
    { title: "song 3", duration: "2:40" },
    { title: "song 4", duration: "5:00" }
  ];
};

const selectedSong = (song = null, action) => {
  if (action.type === "SELECTED_SONG") {
    return action.payload;
  }
  return song;
};

export default combineReducers({
  songs,
  selectedSong
});
