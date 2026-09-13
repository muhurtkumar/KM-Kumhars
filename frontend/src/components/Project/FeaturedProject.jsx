import { ArrowUpRight } from "lucide-react";

const FeaturedProject = ({ project, onViewProject }) => {
  // Don't render the section if there is no featured project
  if (!project) return null;

  return (
    <section className="w-full bg-white font-[Poppins]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1400px]
          px-5
          pb-10
          sm:px-8
          sm:pb-12
          md:px-10
          lg:px-[44px]
          lg:pb-16
        "
      >
        <div
          className="
            group
            flex
            w-full
            flex-col
            overflow-hidden
            rounded-[20px]
            bg-black

            md:flex-row
            md:rounded-[22px]

            lg:rounded-[28px]
          "
        >
          {/* Project image */}
          {/* Featured project image / temporary placeholder */}
          <div
            className="
    relative
    h-[220px]
    w-full
    overflow-hidden
    bg-[#D9D9D9]
    sm:h-[260px]
    md:h-[280px]
    md:w-[42%]
    lg:h-[310px]
  "
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="
        h-full
        w-full
        object-cover
        transition-transform
        duration-500
        group-hover:scale-105
      "
              />
            ) : (
              // Placeholder shown until the actual project image is available
              <div className="h-full w-full bg-[#D9D9D9]" />
            )}
          </div>

          {/* Project information */}
          <div
            className="
              relative
              flex
              flex-1
              flex-col
              justify-center
              px-6
              py-7
              text-white

              sm:px-8
              sm:py-8

              md:px-7
              md:py-7

              lg:px-9
              lg:py-8
            "
          >
            {/* Project year */}
            <span
              className="
                absolute
                right-5
                top-4
                text-[7px]
                font-semibold
                text-white

                sm:right-6
                sm:text-[8px]

                lg:right-8
                lg:top-5
                lg:text-[8px]
              "
            >
              Project Year- {project.year}
            </span>

            {/* Featured label */}
            <p
              className="
                text-[12px]
                font-bold
                uppercase
                text-[#87864E]

                sm:text-[13px]

                lg:text-[14px]
              "
            >
              Featured Project
            </p>

            {/* Project title */}
            <h2
              className="
                mt-1
                text-[20px]
                font-bold
                leading-tight

                sm:text-[22px]

                lg:text-[24px]
              "
            >
              {project.title}
            </h2>

            {/* Short project description */}
            <p
              className="
                mt-1
                max-w-[500px]
                text-[11px]
                font-semibold
                leading-[1.25]
                text-[#E5E5E5]

                sm:text-[12px]

                lg:text-[13px]
              "
            >
              {project.description}
            </p>

            {/* Project statistics */}
            <div className="mt-4 flex items-start gap-7 sm:gap-9 lg:mt-5 lg:gap-10">
              <div>
                <p className="text-[15px] font-bold leading-none sm:text-[17px]">
                  {project.area}
                </p>
                <p className="mt-1 text-[7px] font-medium text-[#D0D0D0]">
                  Sq.ft
                </p>
              </div>

              <div>
                <p className="text-[15px] font-bold leading-none sm:text-[17px]">
                  {project.duration}
                </p>
                <p className="mt-1 text-[7px] font-medium text-[#D0D0D0]">
                  Months
                </p>
              </div>

              <div>
                <p className="text-[15px] font-bold leading-none sm:text-[17px]">
                  {project.location}
                </p>
                <p className="mt-1 text-[7px] font-medium text-[#D0D0D0]">
                  Location
                </p>
              </div>
            </div>

            {/* View project button */}
            <button
              type="button"
              onClick={() => onViewProject?.(project)}
              className="
                group/button
                mt-4
                flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#87864E]
                px-5
                py-2
                text-[8px]
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-[#6f703f]

                sm:text-[9px]

                lg:mt-5
                lg:px-6
                lg:py-2.5
                lg:text-[10px]
              "
            >
              View case study
              <ArrowUpRight
                size={12}
                className="
                  transition-transform
                  duration-300
                  group-hover/button:translate-x-0.5
                  group-hover/button:-translate-y-0.5
                "
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProject;
