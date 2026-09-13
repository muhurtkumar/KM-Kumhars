import { useState } from "react";

// Available project categories
const CATEGORIES = [
  "All",
  "Residential",
  "Commercial",
  "Retail & Hospitality",
  "Interior Decor",
  "Furniture Design",
];

const ProjectFilters = ({
  activeCategory = "All",
  onCategoryChange,
}) => {
  return (
    <section className="w-full bg-[#F7F6F2] pt-10 font-[Poppins] sm:pt-5 md:pt-8 lg:pt-12">
      <div className="mx-auto flex w-full max-w-[1400px] justify-center px-5 pb-8 sm:px-8 md:px-20 lg:px-[44px] lg:pb-20">
        <div
          className="
            flex w-full max-w-[1400px]
            flex-wrap items-center justify-center
            gap-2.5
            sm:gap-3
            md:gap-4
          "
          role="group"
          aria-label="Project categories"
        >
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange?.(category)}
                aria-pressed={isActive}
                className={`
                  min-w-[105px]
                  rounded-[10px]
                  border
                  px-5 py-2.5
                  text-[11px]
                  font-semibold
                  capitalize
                  transition-all
                  duration-300
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#87864E]
                  focus-visible:ring-offset-2

                  sm:min-w-[120px]
                  sm:px-6
                  sm:py-3
                  sm:text-[12px]

                  md:min-w-[135px]
                  md:text-[13px]

                  lg:min-w-[145px]
                  lg:py-3.5
                  lg:text-[14px]
                  cursor-pointer

                  ${
                    isActive
                      ? "border-[#87864E] bg-[#87864E] text-white shadow-sm"
                      : "border-[#D8D8D0] bg-white text-[#333333] hover:border-[#87864E] hover:bg-[#87864E]/10"
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectFilters;