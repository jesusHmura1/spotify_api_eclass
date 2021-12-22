import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
  HeartIcon,
  RssIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";
import { useSelector, useDispatch } from "react-redux";
import { setplaylists, setplayid } from "../store/Slice/playlists/playlistsSlice";

function Sidebar() {
  const spotifyApi = useSpotify();
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.playlist);
  const { data: session } = useSession();
  const [playlist, setPlaylist] = useState(list);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        const { body } = data;
        const { items } = body;
        dispatch(setplaylists(items));
        setPlaylist(items);
      });
    }
  }, [session, spotifyApi, setPlaylist]);
  return (
    <div className="
    text-gray-500 
    p-5 
    text-xs 
    lg:text-sm 
    border-r 
    border-gray-900 
    overflow-y-scroll 
    scrollbar-hide 
    h-screen
    sm:max-w-[12rem]
    lg:max-w-[15rem]
    pb-36">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" /> <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" /> <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" /> <p>Your library</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" /> <p>Reapet</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
      </div>
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" /> <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" /> <p>Liked songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" /> <p>Your episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        {playlist.map((list) => (
          <p key={list.id} onClick={()=>{dispatch(setplayid(list.id))}} className="cursor-pointer hover:text-white">
            {list.name}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
