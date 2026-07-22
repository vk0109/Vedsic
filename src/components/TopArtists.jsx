import LogoLoop from "./LogoLoop";
import {useTheme} from "../context/ThemeContext";

function TopArtists() {
  const artists = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ87R09mTcebxcI7bodOXaKicR9JDYmwhlg9BdTiBMDLg&s=10",
      alt: "Arijit Singh",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA9RXhx95AG66p0yAPRmZd2k4ThB_Xnl7U1ZtPw_eV5D3w66H3p5qegkY&s=10",
      alt: "Shreya Ghoshal",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3Ubftf_7jsCXdRt9GYUt5xEjjiW3XHsqjf2oLBhm3aA&s=10",
      alt: "Sonu Nigam",
    },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/98/Nenje_Ezhu_at_Chennai_%28cropped%29.jpg",
      alt: "A.R. Rahman",
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFjiIuxC-gllvve2lx67191iUp9D_r5kSRdOct4Wk6rcMeNdIZJMCqtpU&s=10",
      alt: "Diljit Dosanjh",
    },
     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRha3r_vh3ChFGft66zHCHQRn0XQpoD1Yk8OJ0me-LRYA&s",
      alt: "Karan Aujla",
    },
    {
        src: "https://c.saavncdn.com/artists/KK_500x500.jpg",
        alt: "KK",
    },
    {
        src: "https://images.bhaskarassets.com/web2images/1884/2025/02/06/lata_1738815917.jpg",
        alt: "Lata Mangeshkar",
    },
     {
        src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmY2KOKBeoYNPOyuvWJEf3c__TDSDpzrkfXJCBL9MLgw&s",
        alt: "R.D.Burman",
    },
    {
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2q-zMVKNlYx-jAwfR84wAV-O7o-XVqpvPNmBupceyNA&s=10",
        alt:"Kishore Kumar",
    },
  ];
  const { theme } = useTheme();

  return (
    <section className="mt-20 mb-10">
   <div className="mb-8 flex items-center gap-4 px-8">
  {/* Red Line */}
  <div className="h-12 w-1 rounded-full bg-red-600"></div>

  {/* Heading */}
  <h2
    className={`text-3xl font-extrabold tracking-tight ${
      theme === "dark" ? "text-white" : "text-black"
    }`}
  >
    Top Artists
  </h2>
</div>
      <div className="relative h-[160px] overflow-hidden">

        <LogoLoop
          logos={artists}
          speed={80}
          direction="left"
          logoHeight={100}
          gap={70}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
          ariaLabel="Top Artists"
        />

      </div>

    </section>
  );
}

export default TopArtists;