const services = [
  {
    title: "HOME DESIGN CONSULTATION",
    desc: "A one-on-one session to understand your lifestyle, taste, and space — the foundation for every design decision that follows.",
    dark: true,
  },
  {
    title: "HOME DESIGN 3D 2D INTERIOR SERVICE",
    desc: "Detailed 3D renders and 2D layouts that let you walk through your space before a single wall is touched.",
    dark: false,
  },
  {
    title: "SPACE PLANNING AND STYLING",
    desc: "Furniture layouts, material palettes, and finishing touches curated to bring cohesion and character to every room.",
    dark: true,
  },
];

export default function HeroCards() {
  return (
    <div className="relative z-20 -mt-30 mx-auto max-w-[1320px] px-6">
      <div className="grid lg:grid-cols-3">
        {services.map((item, index) => (
          <div
            key={index}
            className={`px-10 py-12 ${
              item.dark
                ? "bg-[#1F1B1A] text-white"
                : "bg-[#74733F] text-white"
            }`}
          >
            <h3 className="text-[22px] font-black uppercase leading-tight">
              {item.title}
            </h3>

            <p className="mt-8 text-[17px] leading-8 text-white/90">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}