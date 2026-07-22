import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

function MusicPlayer({ song }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!song || !audioRef.current) return;

    audioRef.current.load();

    audioRef.current
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        setIsPlaying(false);
      });
  }, [song]);

  if (!song) return null;

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }
  };

  return (
    <div className="border-t border-white/10 bg-black/95 px-6 py-3 shadow-2xl backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center gap-5">

        {/* Artwork */}
        <img
          src={song.artworkUrl100?.replace(
            "100x100",
            "300x300"
          )}
          alt={song.trackName}
          className="h-14 w-14 rounded-xl object-cover shadow-lg"
        />

        {/* Song Info */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate font-bold text-white">
            {song.trackName}
          </h3>

          <p className="truncate text-sm text-gray-400">
            {song.artistName}
          </p>
        </div>

       <button
  type="button"
  onClick={togglePlay}
  className="relative z-10 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white transition hover:scale-110 hover:bg-green-400"
>
  {isPlaying ? (
    <Pause size={22} fill="currentColor" />
  ) : (
    <Play size={22} fill="currentColor" />
  )}
</button>

        {/* Audio Controls */}
        <audio
          ref={audioRef}
          controls
          onEnded={() => setIsPlaying(false)}
          className="w-72"
        >
          <source
            src={song.previewUrl}
            type="audio/mpeg"
          />
        </audio>

      </div>

    </div>
  );
}

export default MusicPlayer;