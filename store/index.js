import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from './Slice/playlists/playlistsSlice'
export default configureStore({
    reducer:{
        playlist:playlistReducer,
    }
})
