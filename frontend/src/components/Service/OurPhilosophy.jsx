import philosophyImg from "../../assets/service/philosophy.jpg";

const OurPhilosophy = () => {
  return (
    <section className="px-4 pb-12 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20 font-[Poppins]">
      <div className="mx-auto w-full max-w-[1180px]">
        <div
          className="
            relative flex flex-col overflow-hidden rounded-[12px] bg-[#171717]
            lg:flex-row lg:items-stretch
          "
        >
          {/* Background image (mobile/tablet only) */}
          <div className="absolute inset-0 lg:hidden">
            <img
              src={philosophyImg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171717] via-[#171717]/85 to-[#171717]/40" />
          </div>

          {/* Content */}
          <div
            className="
              relative z-10 flex w-full flex-col justify-center px-6 py-10 sm:px-10 sm:py-12
              lg:w-[42%] lg:px-12
            "
          >
            <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.15em] text-[#a8a468] sm:text-[14px]">
              Our Philosophy
            </span>

            <h2 className="mb-4 text-[26px] font-bold leading-[1.25] text-white sm:text-[30px] lg:text-[32px]">
              Thoughtful Design.
              <br />
              Meaningful Impact.
            </h2>

            <div className="mb-5 h-px w-[60px] bg-[#a8a468]/60" />

            <p className="max-w-[38ch] text-[14px] leading-[1.8] text-[#c9c9c4] sm:text-[15px]">
              Good design is not just about aesthetics. It&apos;s about
              creating spaces that enhance the way you live, work and
              connect.
            </p>
          </div>

          {/* Image (desktop only, side-by-side) */}
          <div className="hidden lg:block lg:h-auto lg:w-[58%]">
            <img
              src={philosophyImg}
              alt="A styled console table with a vase and greenery"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurPhilosophy;