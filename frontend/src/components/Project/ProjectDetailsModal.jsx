import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  X,
  Folder,
  CalendarDays,
  MapPin,
  Maximize,
} from "lucide-react";
import { urlFor } from "../../sanity/client";

const ProjectDetailsModal = ({
  project,
  projects = [],
  onClose,
  onProjectChange,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentProjectIndex = projects.findIndex(
    (item) => item._id === project?._id
  );

  const totalProjects = projects.length;

  const currentImages = project?.images || [];

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        goToNextImage();
      }

      if (event.key === "ArrowLeft") {
        goToPreviousImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, currentImageIndex]);

  if (!project) return null;

  const currentImage = currentImages[currentImageIndex];

  const goToNextImage = () => {
    if (currentImages.length <= 1) return;

    setCurrentImageIndex((prev) =>
      prev === currentImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToPreviousImage = () => {
    if (currentImages.length <= 1) return;

    setCurrentImageIndex((prev) =>
      prev === 0 ? currentImages.length - 1 : prev - 1
    );
  };

  const handlePreviousProject = () => {
    if (currentProjectIndex <= 0) return;

    const previousProject = projects[currentProjectIndex - 1];

    onProjectChange?.(previousProject);
  };

  const handleNextProject = () => {
    if (
      currentProjectIndex === -1 ||
      currentProjectIndex >= totalProjects - 1
    ) {
      return;
    }

    const nextProject = projects[currentProjectIndex + 1];

    onProjectChange?.(nextProject);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handleFullscreen = () => {
    const imageElement = document.getElementById(
      "project-detail-main-image"
    );

    if (!imageElement) return;

    if (imageElement.requestFullscreen) {
      imageElement.requestFullscreen();
    }
  };

  const formatNumber = (number) => {
    return String(number).padStart(2, "0");
  };

  const projectNumber =
    currentProjectIndex >= 0 ? currentProjectIndex + 1 : 1;

  return (
    <div className="fixed inset-0 z-[9999] w-full max-w-full overflow-y-auto overflow-x-hidden bg-[#F8F7F3] font-[Poppins]">
      {/* Header */}
      <header className="flex h-[80px] w-full max-w-full items-center justify-between border-b border-[#E7E5DF] px-5 sm:px-8 lg:px-10">
        <button
          type="button"
          onClick={onClose}
          className="group flex items-center gap-3 text-[13px] font-medium text-[#262626] transition-colors hover:text-[#66683D] sm:text-[14px] cursor-pointer"
        >
          <ArrowLeft
            size={21}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          <span>All Projects</span>
        </button>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close project"
          className="flex h-9 w-9 items-center justify-center text-[#161616] transition-transform duration-300 hover:rotate-90 cursor-pointer"
        >
          <X size={25} strokeWidth={1.5} />
        </button>
      </header>

      {/* Main */}
      <div className="mx-auto flex w-full max-w-[1600px] min-w-0 flex-col lg:flex-row">
        {/* LEFT - IMAGE AREA */}
        <div className="min-w-0 w-full px-0 pt-0 lg:w-[63%] lg:px-0 lg:pt-0">
          {/* Main Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE7E0] lg:aspect-[1.42/1]">
            {currentImage && (
              <img
                id="project-detail-main-image"
                src={urlFor(currentImage)
                  .width(1800)
                  .quality(95)
                  .url()}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            )}

            {/* Previous Image */}
            {currentImages.length > 1 && (
              <button
                type="button"
                onClick={goToPreviousImage}
                aria-label="Previous image"
                className="absolute left-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-105 sm:left-8 sm:h-14 sm:w-14"
              >
                <ArrowLeft
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#151515]"
                />
              </button>
            )}

            {/* Next Image */}
            {currentImages.length > 1 && (
              <button
                type="button"
                onClick={goToNextImage}
                aria-label="Next image"
                className="absolute right-5 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-sm transition-all duration-300 hover:scale-105 sm:right-8 sm:h-14 sm:w-14"
              >
                <ArrowRight
                  size={21}
                  strokeWidth={1.7}
                  className="text-[#151515]"
                />
              </button>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-5 left-5 text-[12px] font-medium text-white drop-shadow-md sm:bottom-7 sm:left-8">
              {formatNumber(currentImageIndex + 1)} /{" "}
              {formatNumber(currentImages.length)}
            </div>

            {/* Fullscreen */}
            <button
              type="button"
              onClick={handleFullscreen}
              aria-label="View fullscreen"
              className="absolute bottom-5 right-5 flex h-9 w-9 items-center justify-center text-white drop-shadow-md transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-8"
            >
              <Maximize size={22} strokeWidth={1.6} />
            </button>
          </div>

          {/* Thumbnails */}
          {currentImages.length > 1 && (
            <div className="flex w-full min-w-0 gap-2 overflow-x-auto px-4 py-4 sm:gap-3 sm:px-7 lg:px-7 lg:py-5">
              {currentImages.map((image, index) => (
                <button
                  key={`${project._id}-${index}`}
                  type="button"
                  onClick={() => handleThumbnailClick(index)}
                  className={`relative h-[75px] w-[85px] flex-shrink-0 overflow-hidden rounded-[8px] transition-all duration-300 sm:h-[95px] sm:w-[110px] ${
                    currentImageIndex === index
                      ? "ring-2 ring-[#29261F] ring-offset-1"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <img
                    src={urlFor(image)
                      .width(300)
                      .height(220)
                      .fit("crop")
                      .quality(90)
                      .url()}
                    alt={`${project.title} ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT - PROJECT INFORMATION */}
        <div className="flex min-w-0 w-full flex-col px-6 pb-10 pt-7 sm:px-8 lg:w-[37%] lg:px-10 lg:pb-12 lg:pt-8 xl:px-11 font-[Poppins]">
          {/* Project Navigation */}
          <div className="flex min-w-0 items-center justify-between gap-3">
            <span className="flex-shrink-0 text-[12px] font-medium text-[#777783] sm:text-[13px]">
              {formatNumber(projectNumber)} /{" "}
              {formatNumber(totalProjects)}
            </span>

            <div className="flex min-w-0 items-center gap-5 text-[12px] sm:gap-6 sm:text-[13px]">
              <button
                type="button"
                onClick={handlePreviousProject}
                disabled={currentProjectIndex <= 0}
                className={`group flex min-w-0 items-center gap-2 transition-colors ${
                  currentProjectIndex <= 0
                    ? "cursor-not-allowed text-[#C7C5C0]"
                    : "text-[#75655F] hover:text-[#222]"
                }`}
              >
                <ArrowLeft
                  size={19}
                  strokeWidth={1.6}
                  className="flex-shrink-0 transition-transform duration-300 group-hover:-translate-x-1"
                />
                <span className="whitespace-nowrap font-[Poppins] cursor-pointer">
                  Previous Project
                </span>
              </button>

              <span className="h-5 w-[1px] flex-shrink-0 bg-[#D7D4CE]"></span>

              <button
                type="button"
                onClick={handleNextProject}
                disabled={
                  currentProjectIndex === -1 ||
                  currentProjectIndex >= totalProjects - 1
                }
                className={`group flex min-w-0 items-center gap-2 transition-colors ${
                  currentProjectIndex === -1 ||
                  currentProjectIndex >= totalProjects - 1
                    ? "cursor-not-allowed text-[#C7C5C0]"
                    : "text-[#75655F] hover:text-[#222]"
                }`}
              >
                <span className="whitespace-nowrap font-[Poppins] cursor-pointer">
                  Next Project
                </span>
                <ArrowRight
                  size={19}
                  strokeWidth={1.6}
                  className="flex-shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>

          {/* Title + Description */}
          <div className="mt-12 min-w-0 sm:mt-14 lg:mt-12">
            <h1 className="break-words font-[Poppins] text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-[#101010] sm:text-[42px] xl:text-[48px]">
              {project.title}
            </h1>

            {project.description && (
              <p className="mt-4 max-w-[1500px] break-words text-[14px] font-normal leading-[1.65] text-[#747681] sm:text-[15px]">
                {project.description}
              </p>
            )}
          </div>

          {/* Project Metadata */}
          <div className="mt-10 grid min-w-0 grid-cols-3 border-b border-[#DDDAD3] pb-6 sm:mt-12">
            {/* Category */}
            <div className="flex min-w-0 items-start gap-3 border-r border-[#DDDAD3] pr-3">
              <Folder
                size={23}
                strokeWidth={1.5}
                className="mt-0.5 flex-shrink-0 text-[#151515]"
              />

              <div className="min-w-0">
                <p className="text-[11px] font-normal text-[#777783] sm:text-[12px]">
                  Category
                </p>
                <p className="mt-2 break-words text-[12px] font-semibold leading-[1.35] text-[#151515] sm:text-[13px]">
                  {project.fullCategory || project.category || "—"}
                </p>
              </div>
            </div>

            {/* Year */}
            <div className="flex min-w-0 items-start gap-3 border-r border-[#DDDAD3] px-3">
              <CalendarDays
                size={22}
                strokeWidth={1.5}
                className="mt-0.5 flex-shrink-0 text-[#151515]"
              />

              <div className="min-w-0">
                <p className="text-[11px] font-normal text-[#777783] sm:text-[12px]">
                  Project Year
                </p>
                <p className="mt-2 break-words text-[12px] font-semibold text-[#151515] sm:text-[13px]">
                  {project.year || "—"}
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex min-w-0 items-start gap-3 pl-3">
              <MapPin
                size={22}
                strokeWidth={1.5}
                className="mt-0.5 flex-shrink-0 text-[#151515]"
              />

              <div className="min-w-0">
                <p className="text-[11px] font-normal text-[#777783] sm:text-[12px]">
                  Location
                </p>
                <p className="mt-2 break-words text-[12px] font-semibold leading-[1.35] text-[#151515] sm:text-[13px]">
                  {project.location || "—"}
                </p>
              </div>
            </div>
          </div>

          {/* KEY HIGHLIGHTS */}
          {project.keyHighlights?.length > 0 && (
            <div className="mt-9 min-w-0">
              <h2 className="text-[18px] font-bold text-[#171717] sm:text-[19px]">
                Key Highlights
              </h2>

              <ul className="mt-3 space-y-2 font-[Poppins]">
                {project.keyHighlights.map((highlight, index) => (
                  <li
                    key={index}
                    className="flex min-w-0 items-start gap-3 break-words text-[14px] leading-[1.5] text-[#747681] sm:text-[15px]"
                  >
                    <span className="mt-[8px] h-[5px] w-[5px] flex-shrink-0 rounded-full bg-[#75655F]"></span>
                    <span className="min-w-0 break-words">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Bottom Next Project */}
          <div className="mt-auto pt-10 lg:pt-12">
            <button
              type="button"
              onClick={handleNextProject}
              disabled={
                currentProjectIndex === -1 ||
                currentProjectIndex >= totalProjects - 1
              }
              className={`group cursor-pointer flex h-[50px] w-[180px] lg:w-[230px] items-center justify-between rounded-[10px] px-7 text-[13px] font-semibold transition-all duration-300 ${
                currentProjectIndex === -1 ||
                currentProjectIndex >= totalProjects - 1
                  ? "cursor-not-allowed bg-[#D4D2CC] text-[#888680]"
                  : "bg-[#242424] text-white hover:bg-[#343434]"
              }`}
            >
              <span>Next Project</span>

              <ArrowRight
                size={21}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Footer line */}
      <div className="mx-6 mt-3 flex items-center justify-between border-t border-[#D9D7D1] py-6 text-[12px] text-[#9295A0] sm:mx-10 lg:mx-10">
        <span>Transforming Spaces, Enriching Lives.</span>

        <span>
          {formatNumber(projectNumber)} /{" "}
          {formatNumber(totalProjects)}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;