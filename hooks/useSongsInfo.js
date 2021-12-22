import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";
import { useSelector } from "react-redux";

function useSongsInfo() {
  const spotifyApi = useSpotify();
  const { id, play: state } = useSelector((state) => state.truck);
  const [songInfo, setSongInfo] = useState(null);
  console.log({ id });
  useEffect(() => {
    const fetchSongInfo = async () => {
      if (id) {
        const trackInfo = await fetch(
          `https://api.spotify.com/v1/tracks/${id}`,
          {
            headers: {
              Authorization: `Bearer ${spotifyApi.getAccessToken()}`,
            },
          }
        ).then((res) => res.json());
        setSongInfo(trackInfo);
      }
    };

    fetchSongInfo();
  }, [id, spotifyApi]);
  return songInfo;
}

export default useSongsInfo;
