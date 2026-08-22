import whoWeAreImage from "../../assets/about/who-we-are.png";
import ReactCountUpModule from "react-countup";

const CountUp = ReactCountUpModule.default || ReactCountUpModule;

const STATS = [
  { end: 4, suffix: "Y+", label: "EXPERIENCE" },
  { end: 25, suffix: "+", label: "BEST TEAM" },
  { end: 75, suffix: "+", label: "TOTAL CLIENT" },
];

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28 px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
      <div className="mx-auto max-w-[1395px]">

        {/* MOBILE + TABLET HEADING */}
        <div className="mb-8 lg:hidden">
          <p className="font-[Poppins] text-[11px] font-bold uppercase tracking-wide text-[#707070] sm:text-xs">
            WHO WE ARE
          </p>
          <h2 className="mt-4 max-w-[650px] font-[Poppins] text-[30px] font-black leading-[1.2] tracking-wide text-[#211F1F] sm:text-[36px] md:text-[40px]">
            WE ARE A TEAM BUILT FOR THOUGHTFUL INTERIOR DESIGN
          </h2>
        </div>

        <div className="flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:items-stretch lg:gap-14 xl:gap-16">

          {/* IMAGE */}
          <div className="w-full overflow-hidden">
            <img
              src={whoWeAreImage}
              alt="Modern interior designed by KM Kumhars Design Studio"
              className="
                aspect-[16/11]
                w-full
                object-cover
                transition-transform duration-500 ease-out hover:scale-[1.04]
                sm:aspect-[16/10]
                md:aspect-[16/9]
                lg:aspect-auto lg:h-[520px]
                xl:h-[560px]
              "
            />
          </div>

          {/* CONTENT */}
          <div className="w-full">
            <div className="hidden lg:block">
              <p className="font-[Poppins] text-[11px] font-bold uppercase tracking-wide text-[#707070] sm:text-xs">
                WHO WE ARE
              </p>
              <h2 className="mt-4 max-w-[600px] font-[Poppins] text-[44px] font-black leading-[1.2] tracking-wide text-[#211F1F] xl:text-[46px]">
                WE ARE A TEAM BUILT FOR THOUGHTFUL INTERIOR DESIGN
              </h2>
            </div>

            <p className="mt-0 font-[Poppins] text-[13px] font-normal leading-[1.55] text-[#242323] sm:text-[14px] md:text-[15px] lg:mt-4 lg:max-w-[650px]">
              Founded on a belief that great design should feel personal, KM
              Kumhars Design Studio brings together architecture, interiors, and
              styling under one roof. We work closely with every client — from
              homeowners to businesses — to understand not just what a space
              should look like, but how it should feel to live and work in. Every
              project starts with listening, because the best interiors are never
              just designed — they&apos;re discovered together.
            </p>

            <div className="mt-5 flex flex-col gap-3">
              {["Flexible Time", "Perfect Work", "Client Priority"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#45B85A] text-[8px] font-bold leading-none text-white sm:h-[13px] sm:w-[13px]"
                  >
                    ✓
                  </span>
                  <span className="font-[Poppins] text-[12px] font-normal text-[#000000] sm:text-[13px]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Statistics — react-countup, triggers on scroll */}
            <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-8">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-[Poppins] text-[28px] font-black leading-none text-[#777777] sm:text-[34px] md:text-[38px]">
                    <CountUp
                      end={stat.end}
                      suffix={stat.suffix}
                      duration={2}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  </p>
                  <p className="mt-2 font-[Poppins] text-[8px] font-bold tracking-[0.1em] text-[#1F1F1F] sm:text-[9px] md:text-[10px]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}