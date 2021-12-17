import { createSlice } from "@reduxjs/toolkit";

export const playlistReducer = createSlice({
  name: "playlists",
  initialState: {
    list: [],
    id: "37i9dQZF1DWThxX36B17XL",
    data: {},
  },
  reducers: {
    setplaylists: (state, action) => {
      state.list = action.payload;
    },
    setplayid: (state, action) => {
      state.id = action.payload;
    },
    setdata: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setplaylists, setplayid, setdata } = playlistReducer.actions;
export default playlistReducer.reducer;
