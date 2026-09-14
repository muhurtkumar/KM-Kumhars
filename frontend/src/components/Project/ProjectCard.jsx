import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, onClick }) => {
  return (
    <article
      onClick={() => onClick?.(project)}
      className="
        group relative cursor-pointer overflow-hidden
        rounded-[24px] bg-white
      "
    >
      {/* Project image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="
            h-full w-full object-cover
            transition-transform duration-500
            group-hover:scale-105
          "
        />

        {/* Dark overlay appears on hover */}
        <div
          className="
            absolute inset-0
            bg-black/0
            transition-all duration-300
            group-hover:bg-black/20
          "
        />

        {/* Arrow shown on project hover */}
        <div
          className="
            absolute right-4 top-4
            flex h-10 w-10 items-center justify-center
            rounded-full bg-white
            opacity-0 shadow-md
            transition-all duration-300
            group-hover:opacity-100
          "
        >
          <ArrowUpRight
            size={18}
            strokeWidth={2}
            className="text-[#263900]"
          />
        </div>
      </div>

      {/* Project information */}
      <div className="px-5 py-4">
        <h3 className="text-[17px] font-bold text-[#211F1F]">
          {project.title}
        </h3>

        <div className="mt-1 flex items-center justify-between gap-3">
          <p className="text-[12px] font-medium text-[#777777]">
            {project.category}
          </p>

          <p className="text-[12px] font-medium text-[#777777]">
            {project.location}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;