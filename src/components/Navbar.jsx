import { Home, Search, Sun, Moon } from "lucide-react";
import logo from "../assets/vedsic.png";
import { useTheme } from "../context/ThemeContext";

function Navbar({ searchTerm, setSearchTerm }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-zinc-800 bg-black/70 backdrop-blur-lg ${
        theme === "dark"
          ? "bg-black/70 border-white/10"
          : "bg-white/80 border-gray-300"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Vedsic Logo"
            className="h-20 w-20 rounded-xl object-contain cursor-pointer hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.7)]"
          />
        </div>

        {/* Center */}
        <div className="flex items-center gap-5 ">

          {/* Home */}
          <button 
           className={`flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300  ${
  theme === "dark"
    ? "bg-zinc-900 text-white hover:bg-zinc-800 hover:text-green-400 hover:shadow-[0_0_15px_rgba(34,197,94,0.6)]"
    : "bg-gray-200 text-black hover:bg-gray-300 hover:text-green-600 hover:shadow-[0_0_15px_rgba(34,197,94,0.4)]"
}`}
          >
            <Home size={26} />
          </button>

          {/* Search */}
          <div
            className={`flex h-14 w-[660px] items-center gap-4 rounded-full border px-6 transition-all duration-300 hover:border-green-600 ${
              theme === "dark"
                ? "border-zinc-800 bg-zinc-900/90"
                : "border-gray-300 bg-white"
            }`}
          >
            <Search
              className={theme === "dark" ? "text-zinc-400" : "text-gray-500"}
            />

           <input
  type="text"
  placeholder="Search songs or artists..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className={`w-full bg-transparent outline-none ${
    theme === "dark"
      ? "text-white placeholder:text-zinc-500"
      : "text-black placeholder:text-gray-500"
  }`}
/>
          </div>

        </div>

        {/* Theme Button */}
        <div className="w-52 flex justify-end">
  <button
    onClick={toggleTheme}
    className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white transition hover:bg-green-600"
  >
    {theme === "dark" ? (
      <Sun size={20} />
    ) : (
      <Moon size={20} />
    )}
  </button>
</div>
        </div>

      
    </nav>
  );
}

export default Navbar;