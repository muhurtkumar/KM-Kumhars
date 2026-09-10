import { House, Layers3, Armchair } from "lucide-react";

const services = [
  {
    title: "HOME DESIGN CONSULTATION",
    desc: "A one-on-one session to understand your lifestyle, taste, and space — the foundation for every design decision that follows.",
    dark: true,
    icon: House,
  },
  {
    title: "HOME DESIGN 3D 2D INTERIOR",
    desc: "Detailed 3D renders and 2D layouts that let you walk through your space before a single wall is touched.",
    dark: false,
    icon: Layers3,
  },
  {
    title: "SPACE PLANNING NAD STYLING",
    desc: "Furniture layouts, material palettes, and finishing touches curated to bring cohesion and character to every room.",
    dark: true,
    icon: Armchair,
  },
];

export default function HeroCards() {
  return (
    <div className="relative z-20 -mt-30 mx-auto w-full md:-mt-45 lg:-mt-30">
      <div className="grid lg:grid-cols-3">
        {services.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className={`flex min-h-[175px] items-center px-7 py-7 sm:px-9 lg:px-7 ${
                item.dark
                  ? "bg-[#1F1B1A] text-white"
                  : "bg-[#74733F] text-white"
              }`}
            >
              {/* Icon */}
              <div className="mr-7 flex shrink-0 items-center justify-center">
                <Icon
                  size={76}
                  strokeWidth={1.2}
                  className={item.dark ? "text-[#87864E]" : "text-white"}
                />
              </div>

              {/* Content */}
              <div className="min-w-0">
                <h3 className="text-[18px] font-black uppercase leading-[1.15] sm:text-[20px] lg:text-[18px] xl:text-[20px]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[890px] text-[12px] leading-[1.7] text-white/90 sm:text-[13px] lg:text-[12px] xl:text-[13px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}