import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import useSpotify from "../hooks/useSpotify";
import { useSelector, useDispatch } from "react-redux";
import useSongsInfo from "../hooks/useSongsInfo";
import { settruckid, setstatus } from "../store/Slice/tracks/tracksSlice";

function Player() {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { id, play: state } = useSelector((state) => state.truck);
  const [volumen, setVolumen] = useState(50);
  const songInfo = useSongsInfo();

  const fetcurrentSongs = () => {
    if (!songInfo) {
      spotifyApi.getMyCurrentPlayingTrack().then((data) => {
        dispatch(settruckid(data.body?.item.id));
        spotifyApi.getMyCurrentPlaybackState().then((data) => {
          dispatch(setstatus(data.body?.is_playing));
        });
      });
    }
  };

  useEffect(() => {
    if (spotifyApi.getAccessToken() && id) {
      fetcurrentSongs();
      setVolumen(50);
    }
  }, [state, spotifyApi, session]);

  return (
    <div className="h-24 bg-gradient-to-b from-black to-gray-900 text-white grid grid-cols-3 text-xs md:text-base px-2 md:px-8">
      <div className="flex items-center space-x-4">
        <img
          className="hidden md:inline h-10 w-10"
          src={songInfo?.album.images?.[0].url}
        ></img>
        <div>
            <h3>
                {songInfo?.name}
            </h3>
            <p>
                {songInfo?.artists?.[0]?.name}
            </p>
        </div>
      </div>
    </div>
  );
}

export default Player;
