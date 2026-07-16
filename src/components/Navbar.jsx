import { Home, Search } from "lucide-react";
import logo from "../assets/vedsic.png";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/70 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-8">

        {/* ---------------- Logo ---------------- */}

        <div className="flex items-center gap-3  hover:text-green-400">

          <img
            src={logo}
            alt="Vedsic Logo"
            className="h-20 w-20 rounded-xl object-contain  cursor-pointer
    hover:border-green-400
    hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.7)] "
          />

         
        </div>



        {/* ---------------- Center ---------------- */}

        <div className="flex items-center gap-5">

          {/* Home */}

          <button
            className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-zinc-900
            text-white
            transition
            duration-300
            hover:scale-105
            hover:bg-zinc-800
            hover:text-green-400
            "
          >
            <Home size={26} />
          </button>



          {/* Search */}

          <div
            className="
            flex
            h-14
            w-[660px]
            items-center
            gap-4
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/90
            px-6
           transition-all duration-300
            focus-within:border-green-400
            focus-within:shadow-[0_0_30px_rgba(34,211,238,.25)]
            "
          >
            <Search className="text-zinc-400" />

            <input
              type="text"
              placeholder="What do you want to play?"
              className="
              w-full
              bg-transparent
              text-white
              outline-none
              placeholder:text-zinc-500
              "
            />
          </div>

        </div>



        {/* Right Empty */}

        <div className="w-52"></div>

      </div>

    </nav>
  );
}

export default Navbar;