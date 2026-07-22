import { useState } from "react";

import Navbar from "./components/Navbar";
import RotatingText from "./components/RotatingText";
import SongList from "./components/SongList";
import ShapeGrid from "./components/ShapeGrid";
import { useTheme } from "./context/ThemeContext";
import Gener from "./components/Gener";
import MoodSection from "./components/MoodSection";
import TopArtists from "./components/TopArtists";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  const { theme } = useTheme();
const [searchTerm, setSearchTerm] = useState("");
  // Currently playing song
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedMood, setSelectedMood] = useState("bollywood");
  const [selectedArtist, setSelectedArtist] = useState("");

  return (
    <div
      className={`relative min-h-screen transition-all duration-500 ${
        theme === "dark"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}
    >
      {/* Background */}
      <div className="fixed inset-0 z-0">
        <ShapeGrid
          speed={0.5}
          squareSize={34}
          direction="diagonal"
          borderColor={
            theme === "dark" ? "#6B7280" : "#D1D5DB"
          }
          hoverFillColor={
            theme === "dark" ? "#6B7280" : "#D1D5DB"
          }
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">

        {/* Navbar */}
        <div className="sticky top-0 z-50">
         <Navbar
    searchTerm={searchTerm}
    setSearchTerm={setSearchTerm}
/>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-3 py-8">
          <h1
            className={`text-5xl font-extrabold ${
              theme === "dark"
                ? "text-white"
                : "text-black"
            }`}
          >
            Songs
          </h1>

          <RotatingText
            texts={[
              "To Listening",
              "To Singing",
              "To Humming",
              "To Chilling",
            ]}
            mainClassName="px-3 py-2 bg-green-400 text-white text-3xl font-bold overflow-hidden rounded-lg"
            staggerFrom="last"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 400,
            }}
            rotationInterval={2000}
            splitBy="characters"
            auto
            loop
          />
        </div>

        {/* Mood Section */}
        <Gener />

        <MoodSection setSelectedMood={setSelectedMood} />

        {/* Divider */}
        <div className="mt-5 ml-6 mr-6">
          <hr />
        </div>

        {/* Top Artists */}
        <TopArtists  setSelectedArtist={setSelectedArtist}/>
       <div className="mt-5 ml-6 mr-6">
          <hr /> 
        </div>
        {/* Songs */}
       <SongList
  setCurrentSong={setCurrentSong}
  searchTerm={searchTerm}
  selectedMood={selectedMood}
    selectedArtist={selectedArtist}
/>

      </div>

      {/* Music Player */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 z-[100]">
          <MusicPlayer song={currentSong} />
        </div>
      )}

    </div>
  );
}

export default App;