import { useEffect, useState } from "react";
import axios from "axios";
import SongCard from "./SongCard";

function SongList() {
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchSongs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://itunes.apple.com/search?term=bollywood&entity=song&limit=52"
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
    fetchSongs();
  }, []);

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

  return (
    <div className="grid grid-cols-4 gap-6 px-8 py-8 justify-items-center">
  {songs.map((song) => (
    <SongCard key={song.trackId} song={song} />
  ))}
</div>
  );
}

export default SongList;