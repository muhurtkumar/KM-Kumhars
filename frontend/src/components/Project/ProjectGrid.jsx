import ProjectCard from "./ProjectCard";

// Temporary project data.
// This will eventually come from Sanity CMS.
const PROJECTS = [
  {
    id: 1,
    title: "Modern Living Space",
    category: "Residential",
    location: "Lucknow",
    image: "/src/assets/Project/project-1.png",
  },
  {
    id: 2,
    title: "Contemporary Residence",
    category: "Residential",
    location: "Lucknow",
    image: "/src/assets/Project/project-2.png",
  },
  {
    id: 3,
    title: "Elegant Office",
    category: "Office",
    location: "Lucknow",
    image: "/src/assets/Project/project-3.png",
  },
  {
    id: 4,
    title: "Luxury Commercial Space",
    category: "Commercial",
    location: "Lucknow",
    image: "/src/assets/Project/project-4.png",
  },
  {
    id: 5,
    title: "Boutique Hospitality",
    category: "Hospitality",
    location: "Lucknow",
    image: "/src/assets/Project/project-5.png",
  },
  {
    id: 6,
    title: "Minimalist Home",
    category: "Residential",
    location: "Lucknow",
    image: "/src/assets/Project/project-6.png",
  },
];

const ProjectGrid = ({ activeCategory = "All", onProjectClick }) => {
  // Show all projects or only the selected category
  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="w-full bg-[#F7F6F2] font-[Poppins]">
      <div
        className="
          mx-auto w-full max-w-[1400px]
          px-5 pb-12
          sm:px-8
          md:px-10
          lg:px-[44px] lg:pb-16
        "
      >
        {/* Responsive project grid */}
        <div
          className="
            grid grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-3
            lg:gap-7
          "
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={onProjectClick}
            />
          ))}
        </div>

        {/* Empty state when a category has no projects */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[15px] font-medium text-[#777777]">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;