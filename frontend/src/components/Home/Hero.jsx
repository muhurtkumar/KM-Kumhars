import LivingRoom from "../../assets/Hero/HeroImage.png"
import HeroImageMobile from "../../assets/Hero/HeroImageMobile.jpg"
import HeroCards from "./HeroCards";
import WhyChooseUs from "./WhyChooseUs";

export default function Hero() {
  return (
    <>
      <div className="relative h-[720px] max-md:h-auto max-md:flex max-md:flex-col">
        {/* Hero Image */}
        <div className="absolute inset-0 flex justify-end max-md:relative max-md:inset-auto max-md:order-2 max-md:-mt-18 max-md:w-full">
          <picture className="flex w-full justify-end max-md:block max-md:w-full">
            <source media="(max-width: 767px)" srcSet={HeroImageMobile} />

            <img
              src={LivingRoom}
              alt="Interior design"
              className="h-full w-[60%] max-md:h-[400px] max-md:w-full max-md:object-cover max-md:object-center max-md:[clip-path:polygon(0_40%,100%_0,100%_100%,0_100%)]
  "
            />
          </picture>
        </div>

        {/* Content */}
        <div className="absolute left-0 top-0 z-10 flex h-full w-[55%] pt-[40px] max-md:relative max-md:left-auto max-md:top-auto max-md:order-1 max-md:h-auto max-md:w-full max-md:pt-8">
          <div className=" max-w-[560px] pl-16 max-md:max-w-none max-md:px-6">
            {/* Small Heading */}
            <p
              className="uppercase tracking-[3px] font-bold text-[#5D5A42] max-md:text-[12px] max-md:tracking-[2px]"
            >
              Welcome To Kumhars
            </p>

            {/* Main Heading */}
            <h1 className="mt-8 font-serif text-[66px] leading-[74px] text-[#191919] max-md:mt-5 max-lg:text-[38px] max-lg:leading-[42px] max-md:text-[38px] max-md:leading-[42px]">
              Curating spaces
              <br />
              of timeless
              <br />
              <span className="italic text-[#7D8142]">elegance.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-[18px] leading-9 text-[#555] max-md:mt-5 max-md:text-[15px] max-md:leading-7">
              We craft interiors where thoughtful design meets everyday living — spaces shaped by light, texture, and intention, built to feel effortless for years to come.
            </p>

            {/* Button */}
            <button
              className="
                group relative mt-8 inline-flex h-[64px] w-[185px]
                items-center justify-center overflow-hidden rounded-lg
                bg-[#87864E] text-white uppercase tracking-[2px]
                font-semibold cursor-pointer font-['Poppins']
                max-md:mt-6
                max-md:h-[52px]
                max-md:w-[160px]
                max-md:text-[12px]
                max-md:tracking-[1.5px]
              "
            >
              {/* Sliding Background */}
              <span
                className="
                  absolute inset-0 origin-left scale-x-0
                  bg-[#6F6E3F]
                  transition-transform duration-500 ease-out
                  group-hover:scale-x-100
                "
              ></span>

              {/* Text */}
              <span className="relative z-10">Our Projects</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <HeroCards />

    </>
  );
}