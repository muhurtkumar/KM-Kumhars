import aboutHeroImage from "../../assets/about/about-hero.png";

export default function AboutHero() {
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#F7F6F2]"
    >
      {/* Hero background image */}
      <img
        src={aboutHeroImage}
        alt="Modern interior designed by KM Kumhars Design Studio"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* White gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-white/10" />

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[260px] items-center sm:min-h-[300px] md:min-h-[350px] lg:min-h-[444px]">
        <div className="w-full px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[700px]">
            {/* Page heading */}
            <h1 className="font-[Poppins] text-[40px] font-black leading-none tracking-wide text-[#52632D] sm:text-[45px] md:text-[50px] lg:text-[65px]">
              ABOUT US
            </h1>

            {/* Page introduction */}
            <p className="mt-4 max-w-[690px] font-[Poppins] text-[10px] font-medium leading-[1.6] text-[#000000] sm:mt-5 sm:text-[10px] md:text-[15px] lg:text-[20px]">
              We are a design studio dedicated to creating interiors that are as
              functional as they are beautiful — for homes, offices, and
              everything in between.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
