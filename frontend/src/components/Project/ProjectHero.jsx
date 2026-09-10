import OurWork from "../../assets/Project/OurWork.png";

export default function ProjectHero() {
  return (
    <section className="w-full bg-white font-[Poppins]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          py-8
          sm:px-8
          sm:py-10
          md:px-10
          md:py-12
          lg:px-[44px]
          lg:py-12
        "
      >
        {/* =====================================================
            HERO CONTENT
        ===================================================== */}
        <div className="flex flex-col items-center text-center">
          {/* Small Heading */}
          <p
            className="
              font-[Poppins]
              text-[11px]
              font-black
              uppercase
              tracking-[0.08em]
              text-[#4F5B19]
              sm:text-[12px]
              md:text-[13px]
              lg:text-[14px]
            "
          >
            OUR WORK
          </p>

          {/* Main Heading */}
          {/* Main Heading */}
          <h2
            className="
    mt-2
    w-full
    max-w-[1150px]
    font-[Poppins]
    text-[27px]
    font-black
    leading-[1.12]
    tracking-[0.01em]
    text-[#111111]
    sm:text-[32px]
    md:text-[38px]
    lg:text-[50px]
    xl:text-[56px]
  "
          >
            Spaces we've designed with
            <br />
            purpose and care
          </h2>

          {/* Description */}
          <p
            className="
              mt-3
              max-w-[650px]
              font-[Poppins]
              text-[11px]
              font-medium
              leading-[1.45]
              text-[#777777]
              sm:text-[13px]
              md:text-[14px]
              lg:text-[15px]
            "
          >
            Browse a curated selection of our completed residential,
            <br className="hidden sm:block" />
            commercial, and hospitality projects
          </p>

          {/* View All Projects Button */}
          <a
            href="#projects"
            className="
              group
              mt-5
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-[8px]
              bg-[#87864E]
              px-4
              py-2
              font-[Poppins]
              text-[9px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#6f703f]
              sm:mt-6
              sm:px-5
              sm:py-2.5
              sm:text-[10px]
              md:text-[11px]
              lg:rounded-[9px]
              lg:px-6
              lg:py-3
              lg:text-[12px]
            "
          >
            <span>View all projects</span>

            {/* Small arrow */}
            <span
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            >
              →
            </span>
          </a>
        </div>

        {/* =====================================================
            HERO IMAGE
        ===================================================== */}
        <div
          className="
            mt-6
            w-full
            sm:mt-7
            md:mt-8
            lg:mt-9
          "
        >
          <div
            className="
              h-[160px]
              w-full
              overflow-hidden
              rounded-[22px]
              sm:h-[210px]
              sm:rounded-[26px]
              md:h-[250px]
              md:rounded-[32px]
              lg:h-[306px]
              lg:rounded-[53px]
            "
          >
            <img
              src={OurWork}
              alt="Our interior design work"
              className="
                h-full
                w-full
                object-cover
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
