import { useEffect, useState } from "react";

import ProjectCard from "./ProjectCard";
import LoadMoreButton from "./LoadMoreButton";
import { client, urlFor } from "../../sanity/client";

const ProjectGrid = ({ activeCategory = "All", onProjectClick }) => {
  // Number of projects currently visible on the page
  const [visibleCount, setVisibleCount] = useState(6);

  // Projects fetched from Sanity
  const [projects, setProjects] = useState([]);

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(`
          *[_type == "project"] | order(_createdAt asc) {
            _id,
            title,
            fullCategory,
            location,
            year,
            images
          }
        `);

        setProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects from Sanity:", error);
      }
    };

    fetchProjects();
  }, []);

  // Filter projects according to the selected category
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.fullCategory === activeCategory
        );

  // Reset visible projects whenever the category changes
  useEffect(() => {
    setVisibleCount(6);
  }, [activeCategory]);

  // Display only the currently visible projects
  const visibleProjects = filteredProjects.slice(0, visibleCount);

  // Check whether there are still projects to display
  const hasMoreProjects = visibleCount < filteredProjects.length;

  // Show all available projects when Load More is clicked
  const handleLoadMore = () => {
    setVisibleCount(filteredProjects.length);
  };

  return (
    <section className="w-full bg-[#F7F6F2] font-[Poppins]">
      <div className="mx-auto w-full max-w-[1400px] px-5 pb-12 sm:px-8 md:px-10 lg:px-[44px] lg:pb-16">
        {/* Responsive project grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project._id}
              project={{
                ...project,
                category: project.fullCategory,
                image: project.images?.[0]
                  ? urlFor(project.images[0]).width(1200).quality(90).url()
                  : null,
              }}
              onClick={onProjectClick}
            />
          ))}
        </div>

        {/* Empty state when no projects match the category */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-[15px] font-medium text-[#777777]">
              No projects found in this category.
            </p>
          </div>
        )}

        {/* Load more button appears only when more projects are available */}
        {filteredProjects.length > 0 && (
          <LoadMoreButton
            onClick={handleLoadMore}
            hasMore={hasMoreProjects}
          />
        )}
      </div>
    </section>
  );
};

export default ProjectGrid;