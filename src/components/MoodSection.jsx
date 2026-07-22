import TiltedCard from "./TiltedCard";

function MoodSection({ setSelectedMood }) {
  const moods = [
    {
      title: "INDIAN WEDDING",
      subtitle: "Shaadi wala ghar",
      search: "indian wedding bollywood",
      image:
        "https://cdn0.weddingwire.in/article/0706/3_2/1280/jpg/126070-indian-wedding-games.jpeg",
    },
    {
      title: "HEARTBREAK",
      subtitle: "Ye sun usko mat...",
      search: "sad bollywood",
      image:
        "https://www.boundless.org/wp-content/uploads/2017/08/5-tips-for-healing-from-a-breakup-656fada120808.webp",
    },
    {
      title: "PARTY NIGHT",
      subtitle: "Aunty police bula lengi",
      search: "party bollywood",
      image:
        "https://weezevent.com/wp-content/uploads/2019/01/12145054/organiser-soiree-1000x585.jpg",
    },
    {
      title: "QWALLI",
      subtitle: "AAaaaaaaaa.......",
      search: "qawwali",
      image:
        "https://ichef.bbci.co.uk/images/ic/1200x675/p05b55mc.jpg",
    },
     {
      title: "BHAKTI",
      subtitle: "Tumhare bin hamra koi nahi....",
      search: "bhajan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPqSpZoQomc7MpLW6QPAdRTebqiMHhoDWapZlc_6DILPOg80x1Y2mBPiYq&s=10",
    },
    {
      title: "TRAVELLING",
      subtitle: "ye suhana safar....",
      search: "travel bollywood",
      image:
        "https://media.cntraveler.com/photos/5fd26c4ddf72876c320b8001/16:9/w_2560%2Cc_limit/952456172",
    },
     {
      title: "IN LOVE",
      subtitle: "Raanjhanna...",
      search: "romantic bollywood",
      image:"https://i.pinimg.com/236x/35/65/a1/3565a13ca600e30be7ce6f0a95fb161b.jpg",
    },
    {
      title: "LOVE FOR COUNTRY",
      subtitle: "Vande mataram",
      search: "patriotic song",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/250px-Flag_of_India.svg.png",
    },


  ];

  return (
    <section className="mt-8 px-8">

      <div className="grid grid-cols-4 gap-6">

        {moods.map((mood) => (
          <TiltedCard
            key={mood.title}
            imageSrc={mood.image}
            altText={mood.title}
            captionText={mood.title}

            containerHeight="300px"
            containerWidth="260px"
            imageHeight="300px"
            imageWidth="260px"

            rotateAmplitude={10}
            scaleOnHover={1.06}

            showMobileWarning={false}
            showTooltip={false}

            displayOverlayContent={true}

            overlayContent={
              <div className="group absolute inset-0 flex flex-col justify-between rounded-[15px] p-5">

                {/* Top Badge */}
                <div className="flex justify-end">
                  <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                    VEDSIC
                  </span>
                </div>

                {/* Bottom Content */}
                <div>
                  <div className="mb-3 h-[2px] w-3 rounded-full bg-green-400 transition-all duration-300 group-hover:w-16" />

                  <h2 className="text-2xl font-bold tracking-tight text-white">
                    {mood.title}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-300">
                    {mood.subtitle}
                  </p>

                  <button
                   onClick={() => setSelectedMood(mood.search)}
                   className="mt-4 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-green-500 hover:border-green-400">
                    Explore Mood →
                  </button>
                </div>

              </div>
            }
          />
        ))}

      </div>

    </section>
  );
}

export default MoodSection;