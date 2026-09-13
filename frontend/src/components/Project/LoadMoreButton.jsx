const LoadMoreButton = ({ onClick, hasMore = true }) => {
  // Hide the button when there are no more projects to load
  if (!hasMore) return null;

  return (
    <div className="flex justify-center py-8 sm:py-10 lg:py-12">
      <button
        type="button"
        onClick={onClick}
        className="
          rounded-full
          bg-[#87864E]
          px-5 py-2.5
          font-[Poppins]
          text-[9px]
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#6f703f]
          hover:shadow-md
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-[#87864E]
          focus-visible:ring-offset-2

          sm:px-6
          sm:py-3
          sm:text-[10px]

          lg:px-7
          lg:py-3.5
          lg:text-[11px]
        "
      >
        Load For More Projects
      </button>
    </div>
  );
};

export default LoadMoreButton;