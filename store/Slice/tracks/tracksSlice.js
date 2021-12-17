import { createSlice } from "@reduxjs/toolkit";

export const trucksReducer = createSlice({
  name: "trucks",
  initialState: {
    id: "",
    play: false,
  },
  reducers: {
    settruckid: (state, action) => {
      state.id = action.payload;
    },
    setstatus: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { settruckid, setstatus } = trucksReducer.actions;
export default trucksReducer.reducer;
