import { ArrowRight } from "lucide-react";
import OurWork from "../../assets/Project/OurWork.png";

export default function ProjectHero() {
  return (
    <section className="w-full  font-[Poppins]">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-8 md:px-10 md:py-8 lg:px-[44px] lg:py-8">

        {/* Heading Content */}
        <div className="flex flex-col items-center text-center">

          {/* Small Heading */}
          <p className="text-[13px] font-black uppercase tracking-[0.08em] text-[#4F5B19] sm:text-[14px] md:text-[15px]">
            Our Work
          </p>

          {/* Main Heading */}
          <h2 className="mt-2 max-w-[700px] text-[28px] font-black leading-[1.15] tracking-[-0.02em] text-[#111111] sm:text-[34px] md:text-[40px] lg:text-[42px]">
            Spaces we've designed with
            <br />
            purpose and care
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[650px] text-[14px] font-semibold leading-[1.3] text-[#777777] sm:text-[16px] md:text-[17px]">
            Browse a curated selection of our completed residential,
            <br className="hidden sm:block" />
            commercial, and hospitality projects
          </p>

          {/* View Projects Button */}
          <a
            href="#projects"
            className="group relative mt-6 inline-flex h-[40px] w-[115px] items-center justify-center overflow-hidden rounded-[10px] bg-[#87864E] text-[11px] font-semibold text-white transition-colors duration-300 hover:bg-[#6f703f] sm:h-[42px] sm:w-[120px] sm:text-[11px] lg:h-[48px] lg:w-[145px] lg:text-[13px]"
          >
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#6f6e3f] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

            <span className="relative z-10">
              View all projects
            </span>
          </a>
        </div>

        {/* Project Image */}
        <div className="relative mt-6 sm:mt-7 md:mt-8 lg:mt-9">

          {/* Image */}
          <div className="h-[200px] w-full overflow-hidden rounded-[28px] sm:h-[260px] sm:rounded-[32px] md:h-[320px] lg:h-[306px] lg:rounded-[53px] mb-5 lg:mb-7">
            <img
              src={OurWork}
              alt="Our interior design work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}