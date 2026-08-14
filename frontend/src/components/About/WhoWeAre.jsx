import whoWeAreImage from "../../assets/about/who-we-are.png";

export default function WhoWeAre() {
  return (
    <section className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 md:px-10 lg:px-16 lg:py-24 xl:px-20">
      <div className="mx-auto flex max-w-[1395px] flex-col gap-10 lg:grid lg:grid-cols-2 lg:items-center lg:gap-14 xl:gap-16">
        {/* Section image */}
        <div className="w-full">
          <img
            src={whoWeAreImage}
            alt="Modern interior designed by KM Kumhars Design Studio"
            className="aspect-[4/3] w-full object-cover lg:aspect-auto lg:h-full"
          />
        </div>

        {/* Section content */}
        <div className="w-full">
          {/* Small section label */}
          <p className="font-[Poppins] text-[11px] font-bold uppercase tracking-wide text-[#707070] sm:text-xs">
            WHO WE ARE
          </p>

          {/* Main heading */}
          <h2 className="mt-4 max-w-[600px] font-[Poppins] text-[32px] font-black leading-[1.2] tracking-wide text-[#211F1F] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
            WE ARE A TEAM BUILT FOR THOUGHTFUL INTERIOR DESIGN
          </h2>

          {/* Description */}
          <p className="mt-4 max-w-[650px] font-[Poppins] text-[13px] font-normal leading-[1.55] text-[#242323] sm:text-[14px]">
            Founded on a belief that great design should feel personal, KM
            Kumhars Design Studio brings together architecture, interiors, and
            styling under one roof. We work closely with every client — from
            homeowners to businesses — to understand not just what a space
            should look like, but how it should feel to live and work in. Every
            project starts with listening, because the best interiors are never
            just designed — they&apos;re discovered together.
          </p>

          {/* Key values */}
          <div className="mt-5 flex flex-col gap-3">
            {["Flexible Time", "Perfect Work", "Client Priority"].map(
              (item) => (
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
              ),
            )}
          </div>

          {/* Statistics */}
          <div className="mt-8 grid grid-cols-3 gap-4 sm:mt-10 sm:gap-8">
            <div className="text-center">
              <p className="font-[Poppins] text-[32px] font-black leading-none text-[#777777] sm:text-[38px]">
                4Y
              </p>
              <p className="mt-2 font-[Poppins] text-[9px] font-bold tracking-[0.12em] text-[#1F1F1F] sm:text-[10px]">
                EXPERIENCE
              </p>
            </div>

            <div className="text-center">
              <p className="font-[Poppins] text-[32px] font-black leading-none text-[#777777] sm:text-[38px]">
                25+
              </p>
              <p className="mt-2 font-[Poppins] text-[9px] font-bold tracking-[0.12em] text-[#1F1F1F] sm:text-[10px]">
                BEST TEAM
              </p>
            </div>

            <div className="text-center">
              <p className="font-[Poppins] text-[32px] font-black leading-none text-[#777777] sm:text-[38px]">
                75+
              </p>
              <p className="mt-2 font-[Poppins] text-[9px] font-bold tracking-[0.12em] text-[#1F1F1F] sm:text-[10px]">
                TOTAL CLIENT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
