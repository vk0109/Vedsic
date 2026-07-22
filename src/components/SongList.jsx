import { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "./SongCard";

function SongList({ setCurrentSong, searchTerm, selectedMood }) {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSongs = async (query = "bollywood") => {
    try {
      setLoading(true);

      const response = await axios.get(
        `https://itunes.apple.com/search?term=${encodeURIComponent(
          query
        )}&entity=song&limit=52`
      );

      setSongs(response.data.results);
      setError("");
    } catch (err) {
      setError("Failed to fetch songs.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    const query =
      searchTerm.trim() !== ""
        ? searchTerm
        : selectedMood || "bollywood";

    fetchSongs(query);
  }, 500);

  return () => clearTimeout(timer);
}, [searchTerm, selectedMood]);

  if (loading) {
    return (
      <h1 className="mt-10 text-center text-2xl text-white">
        Loading Songs...
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="mt-10 text-center text-red-500">
        {error}
      </h1>
    );
  }

  if (songs.length === 0) {
    return (
      <h1 className="mt-10 text-center text-2xl text-zinc-400">
        No Songs Found 🎵
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-4 justify-items-center gap-6 px-8 py-8 pb-32">
      {songs.map((song) => (
        <SongCard
          key={song.trackId}
          song={song}
          setCurrentSong={setCurrentSong}
        />
      ))}
    </div>
  );
}

export default SongList;