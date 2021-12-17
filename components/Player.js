import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";
import { useSelector, useDispatch } from "react-redux";
import { setplaylists, setplayid } from "../store/Slice/playlists/playlistsSlice";

function Player() {
  return <div>
      <img></img>
  </div>;
}

export default Player;
