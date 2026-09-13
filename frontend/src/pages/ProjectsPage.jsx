import { useState } from "react";

import ProjectHero from "../components/Project/ProjectHero";
import ProjectFilters from "../components/Project/ProjectFilters";
import ProjectGrid from "../components/Project/ProjectGrid";
import FeaturedProject from "../components/Project/FeaturedProject";

import { FEATURED_PROJECT } from "../components/Project/projectData";

const ProjectsPage = () => {
  // Stores the currently selected project category
  const [activeCategory, setActiveCategory] = useState("All");

  // Handles project card selection
  const handleProjectClick = (project) => {
    console.log("Selected project:", project);
  };

  // Handles the featured project action
  const handleFeaturedProject = (project) => {
    console.log("Featured project:", project);
  };

  return (
    <main>
      {/* Projects hero section */}
      <ProjectHero />

      {/* Project category filters */}
      <ProjectFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Project cards and Load More button */}
      <ProjectGrid
        activeCategory={activeCategory}
        onProjectClick={handleProjectClick}
      />

      {/* Featured project */}
      <FeaturedProject
        project={FEATURED_PROJECT}
        onViewProject={handleFeaturedProject}
      />
    </main>
  );
};

export default ProjectsPage;