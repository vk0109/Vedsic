function SongCard({ song }) {
  return (
    <div className="rounded-xl bg-zinc-900 p-5 shadow-lg">

      <img
        src={song.artworkUrl100.replace("100x100", "1000x1000")}
        alt={song.trackName}
        className="h-52 w-full object-cover rounded-xl"
      />

      <h2 className="mt-4 text-xl font-bold text-white">
        {song.trackName}
      </h2>

      <p className="text-zinc-400">
        {song.artistName}
      </p>

      <p className="text-sm text-zinc-500">
        {song.collectionName}
      </p>
 
     <audio
  controls
  className="mt-4 w-full"
>
  <source src={song.previewUrl} type="audio/mpeg" />
</audio>
    </div>
  );
}

export default SongCard;