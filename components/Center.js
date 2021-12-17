import { signOut, useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import useSpotify from "../hooks/useSpotify";
import { useSelector, useDispatch } from "react-redux";
import { setdata } from "../store/Slice/playlists/playlistsSlice";
import Songs from "../components/Songs";

const colors = [
  "from-blue-500",
  "from-red-500",
  "from-green-500",
  "from-pink-500",
  "from-purple-500",
  "from-yellow-500",
];

function Center() {
  const dispatch = useDispatch();
  const spotifyApi = useSpotify();
  const { data: session } = useSession();
  const [color, setColor] = useState(null);
  const { id, data } = useSelector((state) => state.playlist);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, [id]);

  useEffect(() => {
    if(spotifyApi.getAccessToken()){
      spotifyApi.getPlaylist(id).then((data) => {
        const { body } = data;
        dispatch(setdata(body));
      });
    }
  }, [spotifyApi,id]);

  return (
    <div className="flex-grow h-screen overflow-scroll scrollbar-hide">
      <header className="absolute top-5 right-8">
        <div
          className={`flex items-center ${color} space-x-3 opacity-90 hover:opacity-80 cursor-pointer rounded-full p-1 pr-2 border-t-[0.1px] border-gray-900`}
          onClick={()=>{signOut()}}
        >
          <img
            className="rounded-full w-10 h-10"
            src={session?.user.image}
            alt=""
          />
          <h2>{session?.user.name}</h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <session
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8`}
      >
        <img
          className="h-44 w-44 shadow-2xl "
          src={data?.images?.[0]?.url}
          alt=""
        ></img>
        <div>
          <p>PLAYLIST</p>
          <h1 className="text-2xl md:text-3xl xl:text-5xl font-bold">
            {data?.name}
          </h1>
        </div>
      </session>
      <div>
        <Songs />
      </div>
    </div>
  );
}

export default Center;
