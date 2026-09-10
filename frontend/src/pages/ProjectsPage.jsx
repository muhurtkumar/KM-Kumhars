import { useState } from "react";

import ProjectHero from "../components/Project/ProjectHero";
import ProjectFilters from "../components/Project/ProjectFilters";
import ProjectGrid from "../components/Project/ProjectGrid";

const ProjectsPage = () => {
  // Stores the category selected by the user
  const [activeCategory, setActiveCategory] = useState("All");

  // Will be used later to open the project detail page
  const handleProjectClick = (project) => {
    console.log("Selected project:", project);
  };

  return (
    <main>
      {/* Projects hero section */}
      <ProjectHero />

      {/* Category filter buttons */}
      <ProjectFilters
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* Filtered project cards */}
      <ProjectGrid
        activeCategory={activeCategory}
        onProjectClick={handleProjectClick}
      />
    </main>
  );
};

export default ProjectsPage;