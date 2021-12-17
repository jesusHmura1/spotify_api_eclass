import useSpotify from "../hooks/useSpotify";
import { millisToMinutesAndSeconds } from "../lib/time";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { settruckid, setstatus } from "../store/Slice/tracks/tracksSlice";

function Song({ order, track }) {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const { id, play } = useSelector((state) => state.truck);
  const [currentTrackId, setCurrentTruckId] = useState(id);
  const [currentStatusSong, setCurrentStatusSong] = useState(play);

  const playSong = () => {
    if (track) {
      dispatch(settruckid(track.track.id));
      dispatch(setstatus(true));
      setCurrentTruckId(track.track.id);
      setCurrentStatusSong(true);

      spotifyApi.play({
          uris: [track.track.uri],
      })
    }
  };

  return (
    <div
      className="grid grid-cols-2 text-gray-500 py-4 px-5 hover:bg-gray-900 rouded-lg"
      onClick={() => {
        playSong();
      }}
    >
      <div className="flex items-center space-x-4">
        <p>{order + 1}</p>
        <img className="h-10 w-10" src={track.track.album.images[0].url}></img>
        <div>
          <p className="w-36  lg:w-64 truncate text-white">
            {track.track.name}
          </p>
          <p className="w-40">{track.track.artists[0].name}</p>
        </div>
        <div className="flex items-center justify-between ml-auto md:ml-0">
          <p className="w-40 hidden md:inline">{track.track.album.name}</p>
          <p className="hidden md:inline">
            {millisToMinutesAndSeconds(track.track.duration_ms)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Song;
