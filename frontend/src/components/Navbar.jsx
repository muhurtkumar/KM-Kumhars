import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import {
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";

const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT US",
    href: "/about",
    dropdown: ["Who We Are", "Founder's Note"].map((label) => ({
      label,
      href: `/about#${slugify(label)}`,
    })),
  },
  {
    label: "OUR SERVICES",
    href: "/services",
    dropdown: [
      "Residential",
      "Commercial",
      "Interior Decor & Styling",
      "Space Planning",
      "Retail & Hospitality Design",
      "Design Consultation",
      "Custom Furniture Design",
    ].map((label) => ({
      label,
      href: `/services#${slugify(label)}`,
    })),
  },
  { label: "OUR PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Mobile dropdown state
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  // Search state (shared by the mobile inline field and the
  // desktop full-width panel)
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Keep the search field synchronized with the URL search query
  useEffect(() => {
    const queryFromUrl = searchParams.get("search") || "";
    setSearchQuery(queryFromUrl);
  }, [searchParams]);

  // Search is considered active ONLY when a search query
  // has actually been submitted and exists in the URL.
  const activeSearchQuery = searchParams.get("search") || "";
  const hasActiveSearch = Boolean(activeSearchQuery.trim());

  const handleSearch = (e) => {
    e.preventDefault();

    const query = searchQuery.trim();

    if (!query) return;

    // Redirect to the projects page with the search query
    navigate(
      `/projects?search=${encodeURIComponent(query)}#project-filters`
    );

    // Show success toast
    toast.success(`Showing projects for "${query}"`);

    // Close mobile menu and desktop search panel
    setSearchOpen(false);
    setMobileOpen(false);
  };

  const handleClearSearch = () => {
    // Clear the search field
    setSearchQuery("");

    // Return to the project filters section without a search
    navigate("/projects#project-filters");

    // Show clear search toast
    toast.success("Search cleared");
  };

  return (
    <nav className="sticky top-0 relative z-50 w-full bg-[#F7F6F2] text-[#1C1C1A] font-[Poppins]">

      {/* ================= HEADER ================= */}
      <div className="flex w-full items-center justify-between px-6 py-6 sm:px-8 lg:px-10 lg:py-7 xl:px-16">

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex shrink-0 flex-col leading-[1.15] no-underline"
        >
          <span className="font-serif text-xl sm:text-2xl">
            Km Kumhars
          </span>

          <span className="font-serif text-xl sm:text-2xl">
            Design Studio
          </span>
        </Link>


        {/* ================= DESKTOP NAV ================= */}
        {/* Desktop navigation starts at lg (1024px) */}
        <ul className="m-0 hidden list-none items-center gap-5 p-0 lg:flex lg:gap-6 xl:gap-9">

          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"

              onMouseEnter={() => {
                if (link.dropdown) {
                  setDropdownOpen(link.label);
                }
              }}

              onMouseLeave={() => {
                if (link.dropdown) {
                  setDropdownOpen(null);
                }
              }}
            >

              {/* ================= DESKTOP MAIN NAV LINK ================= */}
              <Link
                to={link.href}
                className="flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[#1C1C1A] no-underline transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1C1A] lg:text-[13px]"
              >
                {link.label}

                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                  />
                )}
              </Link>


              {/* ================= DESKTOP DROPDOWN ================= */}
              {link.dropdown &&
                dropdownOpen === link.label && (
                  <ul className="absolute left-0 top-full z-50 m-0 min-w-52.5 list-none bg-[#EFEDE4] py-2 pt-4 shadow-lg">

                    {link.dropdown.map((item) => (
                      <li key={item.label}>
                        <Link
                          to={item.href}
                          onClick={() => setDropdownOpen(null)}
                          className="block px-4 py-2.5 text-[13px] text-[#1C1C1A] no-underline transition-opacity hover:opacity-60"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}

                  </ul>
                )}
            </li>
          ))}


          {/* ================= DESKTOP SEARCH TOGGLE ================= */}
          <li>
            <button
              type="button"
              onClick={() => setSearchOpen((open) => !open)}
              aria-label={searchOpen ? "Close search" : "Open search"}
              aria-expanded={searchOpen}
              className="flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-[#1C1C1A] transition-opacity hover:opacity-60"
            >
              {searchOpen ? (
                <X size={19} strokeWidth={2} />
              ) : (
                <Search size={19} strokeWidth={2} />
              )}
            </button>
          </li>
        </ul>


        {/* ================= MOBILE / TABLET HAMBURGER ================= */}
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-9 w-11 shrink-0 cursor-pointer items-center justify-center border-none bg-[#1C1C1A] text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1A] sm:h-10 sm:w-12 lg:hidden"
        >

          {mobileOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}

        </button>

      </div>


      {/* ================= DESKTOP FULL-WIDTH SEARCH PANEL ================= */}
      <div
        aria-hidden={!searchOpen}
        className={`absolute inset-x-0 top-full z-30 hidden overflow-hidden bg-[#F7F6F2]/40 shadow-lg backdrop-blur-md transition-[grid-template-rows] duration-300 ease-in-out lg:grid ${
          searchOpen
            ? "grid-rows-[1fr] border-t border-black/5"
            : "grid-rows-[0fr] border-t-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <form
            onSubmit={handleSearch}
            className={`mx-auto flex w-full max-w-3xl items-center gap-4 px-6 py-10 transition-opacity duration-200 lg:px-10 xl:px-16 ${
              searchOpen ? "opacity-100 delay-100" : "opacity-0"
            }`}
          >
            <Search
              size={20}
              strokeWidth={2}
              className="shrink-0 text-[#1C1C1A]"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by project name or location"
              autoFocus={searchOpen}
              tabIndex={searchOpen ? 0 : -1}
              className="flex-1 border-b border-[#1C1C1A]/40 bg-transparent py-2 text-[16px] text-[#1C1C1A] outline-none placeholder:text-[#1C1C1A]/50 focus:border-[#1C1C1A]"
            />

            <button
              type={hasActiveSearch ? "button" : "submit"}
              onClick={hasActiveSearch ? handleClearSearch : undefined}
              tabIndex={searchOpen ? 0 : -1}
              className="shrink-0 rounded-md cursor-pointer border-none bg-[#6B7A3A] px-6 py-2.5 text-[12px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80"
            >
              {hasActiveSearch ? "Clear Search" : "Search"}
            </button>
          </form>
        </div>
      </div>


      {/* ================= MOBILE / TABLET MENU ================= */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-[#F7F6F2] px-6 pb-6 pt-4 sm:px-8 lg:hidden">

          {/* ================= MOBILE SEARCH ================= */}
          <form
            onSubmit={handleSearch}
            className="mb-4 flex items-center border-b border-[#1C1C1A]/40 pb-2"
          >

            <Search
              size={18}
              strokeWidth={2}
              className="mr-2 shrink-0"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search by project or location"
              className="w-full bg-transparent text-[13px] text-[#1C1C1A] outline-none placeholder:text-[#1C1C1A]/60"
            />

            {/* Clear search option appears only after
                a search has actually been submitted */}
            {hasActiveSearch && (
              <button
                type="button"
                onClick={handleClearSearch}
                aria-label="Clear search"
                className="ml-2 flex shrink-0 cursor-pointer items-center justify-center border-none bg-transparent p-1 text-[#1C1C1A] transition-opacity hover:opacity-60"
              >
                <X size={15} strokeWidth={2} />
              </button>
            )}

          </form>


          {/* ================= MOBILE NAV ================= */}
          <ul className="m-0 grid list-none grid-cols-1 gap-x-6 gap-y-1 p-0 sm:grid-cols-1">

            {NAV_LINKS.map((link) =>
              link.dropdown ? (

                <li
                  key={link.label}
                  className="border-b border-black/5 sm:border-none"
                >

                  {/* ================= MOBILE NAV HEADER ================= */}
                  <div className="flex w-full items-center justify-between">

                    <Link
                      to={link.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                      className="flex-1 py-3 text-[13px] font-bold uppercase tracking-wide text-[#1C1C1A] no-underline sm:text-[15px]"
                    >
                      {link.label}
                    </Link>


                    <button
                      type="button"
                      onClick={() =>
                        setOpenMobileDropdown((current) =>
                          current === link.label
                            ? null
                            : link.label
                        )
                      }
                      aria-label={`Open ${link.label} dropdown`}
                      aria-expanded={
                        openMobileDropdown === link.label
                      }
                      className="flex cursor-pointer items-center border-none bg-transparent px-2 py-3 text-[#1C1C1A]"
                    >

                      <ChevronDown
                        size={14}
                        strokeWidth={2.5}
                        className={`transition-transform duration-200 ${
                          openMobileDropdown === link.label
                            ? "rotate-180"
                            : ""
                        }`}
                      />

                    </button>

                  </div>


                  {/* ================= MOBILE DROPDOWN ================= */}
                  {openMobileDropdown === link.label && (
                    <ul className="m-0 flex list-none flex-col gap-2 pb-3 pl-3">

                      {link.dropdown.map((item) => (
                        <li key={item.label}>

                          <Link
                            to={item.href}
                            onClick={() => {
                              setOpenMobileDropdown(null);
                              setMobileOpen(false);
                            }}
                            className="block py-1 text-[12px] text-[#1C1C1A] opacity-80 no-underline sm:text-[14px]"
                          >
                            {item.label}
                          </Link>

                        </li>
                      ))}

                    </ul>
                  )}

                </li>

              ) : (

                <li
                  key={link.label}
                  className="border-b border-black/5 sm:border-none"
                >

                  <Link
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-[13px] font-bold uppercase tracking-wide text-[#1C1C1A] no-underline sm:text-[15px]"
                  >
                    {link.label}
                  </Link>

                </li>

              )
            )}

          </ul>

        </div>
      )}

    </nav>
  );
}