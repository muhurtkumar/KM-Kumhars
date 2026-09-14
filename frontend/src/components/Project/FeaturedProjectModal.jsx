import { useEffect } from "react";
import { ArrowLeft, X, Folder, CalendarDays, MapPin, Maximize } from "lucide-react";

// Standalone details view for the Featured Project.
// Unlike ProjectDetailsModal, this one does NOT talk to Sanity and does NOT
// navigate between projects — there's only ever one featured project.
const FeaturedProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleFullscreen = () => {
    const imageElement = document.getElementById(
      "featured-project-main-image"
    );

    if (!imageElement) return;

    if (imageElement.requestFullscreen) {
      imageElement.requestFullscreen();
    }
  };

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
        {/* LEFT - IMAGE AREA (same image used on the featured card) */}
        <div className="min-w-0 w-full px-0 pt-0 lg:w-[63%] lg:px-0 lg:pt-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EAE7E0] lg:aspect-[1.42/1]">
            {project.image ? (
              <img
                id="featured-project-main-image"
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full bg-[#D9D9D9]" />
            )}

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
        </div>

        {/* RIGHT - PROJECT STORY */}
        <div className="flex min-w-0 w-full flex-col px-6 pb-10 pt-7 sm:px-8 lg:w-[37%] lg:px-10 lg:pb-12 lg:pt-8 xl:px-11 font-[Poppins]">
          {/* Title */}
          <h1 className="break-words font-[Poppins] text-[34px] font-bold leading-[1.1] tracking-[-0.04em] text-[#101010] sm:text-[42px] xl:text-[48px]">
            {project.title}
          </h1>

          {/* Eyebrow */}
          <p className="mt-3 text-[12px] font-bold uppercase tracking-[0.04em] text-[#87864E] sm:text-[13px]">
            Let's dive into the story of our most beloved project
          </p>

          {/* Description */}
          <div className="mt-4 min-w-0">
            {project.description && (
              <p className="max-w-[1500px] break-words text-[14px] font-normal leading-[1.65] text-[#747681] sm:text-[15px]">
                {project.description}
              </p>
            )}
          </div>

          {/* Project Metadata */}
          <div className="mt-10 grid min-w-0 grid-cols-3 border-b border-[#DDDAD3] pb-6 sm:mt-12">
            {/* Area */}
            <div className="flex min-w-0 items-start gap-3 border-r border-[#DDDAD3] pr-3">
              <Folder
                size={23}
                strokeWidth={1.5}
                className="mt-0.5 flex-shrink-0 text-[#151515]"
              />

              <div className="min-w-0">
                <p className="text-[11px] font-normal text-[#777783] sm:text-[12px]">
                  Area
                </p>
                <p className="mt-2 break-words text-[12px] font-semibold leading-[1.35] text-[#151515] sm:text-[13px]">
                  {project.area ? `${project.area} Sq.ft` : "—"}
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

          {/* Duration (kept separate since the modal card is a 3-col grid and
              FeaturedProject has 4 stats on the homepage card: area / duration / location) */}
          {project.duration && (
            <div className="mt-6 flex min-w-0 items-center gap-3 text-[13px] text-[#747681]">
              <span className="font-semibold text-[#151515]">
                {project.duration}
              </span>
              <span>months to complete</span>
            </div>
          )}
        </div>
      </div>

      {/* Footer line */}
      <div className="mx-6 mt-3 flex items-center justify-between border-t border-[#D9D7D1] py-6 text-[12px] text-[#9295A0] sm:mx-10 lg:mx-10">
        <span>Transforming Spaces, Enriching Lives.</span>
      </div>
    </div>
  );
};

export default FeaturedProjectModal;