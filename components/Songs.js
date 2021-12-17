import { useSelector } from "react-redux";
import Song from "./Song";
function Songs() {
  const { data: playlist } = useSelector((state) => state.playlist);
  console.log({ playlist });
  return (
    <div className="px-8 flex flex-col space-y-1 text-white">
      {playlist?.tracks?.items.map((track, i) => (
        <Song key={track.track.id} track={track} order={i} />
      ))}
    </div>
  );
}

export default Songs;
