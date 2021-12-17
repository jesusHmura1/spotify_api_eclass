import { createSlice } from "@reduxjs/toolkit";

export const playlistReducer = createSlice({
  name: "playlists",
  initialState: {
    list: [],
    id: "",
    playlistdata: {},
  },
  reducers: {
    setplaylists: (state, action) => {
      state.list = action.payload;
    },
    setplayid: (state, action) => {
      state.id = action.payload;
    },
    setplaylistdata: (state, action) => {
      state.playlistdata = action.payload;
    },
  },
});

export const { setplaylists, setplayid, setplaylistdata } = playlistReducer.actions;
export default playlistReducer.reducer;
