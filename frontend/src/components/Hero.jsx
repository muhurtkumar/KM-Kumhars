import LivingRoom from "../assets/Hero/HeroImage.png";
import HeroCards from "./HeroCards";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Main Hero */}

      <div className="relative h-[720px]">

        {/* Hero Image */}

        <div className="absolute inset-0 flex justify-end">
          <img
            src={LivingRoom}
            alt=""
            className="h-full w-[60%]"
          />
        </div>

        {/* Content */}

        <div className="absolute left-0 top-0 z-10 flex h-full w-[55%] pt-[40px]">
          <div className="max-w-[560px] pl-16">

            <p className="uppercase tracking-[3px] font-bold text-[#5D5A42]">
              Welcome To Kumhars
            </p>

            <h1 className="mt-8 font-serif text-[66px] leading-[74px] text-[#191919]">
              Curating spaces 
              <br />
              of timeless 
              <br />
              <span className="italic text-[#7D8142]">
               elegance.
              </span>
            </h1>

            <p className="mt-8 text-[18px] leading-9 text-[#555]">
              We craft interiors where thoughtful design meets everyday
              living — spaces shaped by light, texture, and intention,
              built to feel effortless for years to come.
            </p>

            <button className="group relative mt-8 inline-flex h-[64px] w-[185px] items-center justify-center overflow-hidden rounded-lg bg-[#87864E] text-white uppercase tracking-[2px] font-semibold cursor-pointer">
              {/* Sliding Background */}
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#6F6E3F] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

              {/* Text */}
              <span className="relative z-10">
                Our Projects
              </span>
            </button>

          </div>
        </div>

      </div>

      {/* Bottom Cards */}

      <HeroCards />

    </section>
  );
}