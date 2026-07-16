import Navbar from "./components/Navbar";
import RotatingText from "./components/RotatingText";
import SongList from "./components/SongList";
import ShapeGrid from "./components/ShapeGrid";



function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">

      {/* Background */}
      <div className="absolute inset-0 z-10">
        <ShapeGrid
          speed={0.5}
          squareSize={34}
          direction="diagonal"
          borderColor="#6B7280"
          hoverFillColor="#6B7280"
          shape="square"
          hoverTrailAmount={0}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="flex items-center justify-center gap-3 py-8">
          <h1 className="text-5xl font-extrabold text-white">
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

        <SongList />
      </div>
        
    </div>
  );
}

export default App;