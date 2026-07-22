import { useTheme } from "../context/ThemeContext";

function SongCard({ song, setCurrentSong }) {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full max-w-[300px] rounded-xl p-5 shadow-lg transition-all duration-300 hover:scale-[1.02] ${
        theme === "dark"
          ? "bg-zinc-900"
          : "bg-gray-200"
      }`}
    >

      {/* Image */}
      <img
        src={song.artworkUrl100?.replace(
          "100x100",
          "1000x1000"
        )}
        alt={song.trackName}
        className="h-52 w-full rounded-xl object-cover"
      />

      {/* Song Name */}
      <h2
        className={`mt-4 truncate text-xl font-bold ${
          theme === "dark"
            ? "text-white"
            : "text-black"
        }`}
      >
        {song.trackName}
      </h2>

      {/* Artist */}
      <p
        className={
          theme === "dark"
            ? "text-zinc-400"
            : "text-gray-700"
        }
      >
        {song.artistName}
      </p>

      {/* Album */}
      <p
        className={`truncate text-sm ${
          theme === "dark"
            ? "text-zinc-500"
            : "text-gray-600"
        }`}
      >
        {song.collectionName}
      </p>

      {/* Play Button */}
      <button
        onClick={() => setCurrentSong(song)}
        className="mt-4 w-full rounded-lg bg-green-500 py-3 font-bold text-white transition-all duration-300 hover:bg-green-600 hover:scale-[1.02]"
      >
        Play Song
      </button>

    </div>
  );
}

export default SongCard;