import { configureStore } from "@reduxjs/toolkit";
import playlistReducer from './Slice/playlists/playlistsSlice'
import trucksReducer from './Slice/tracks/tracksSlice'
export default configureStore({
    reducer:{
        playlist:playlistReducer,
        truck:trucksReducer,
    }
})
