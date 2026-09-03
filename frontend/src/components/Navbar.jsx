import { useState } from "react";
import {
  ChevronDown,
  Menu,
  X,
  Search,
} from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
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
    ],
  },
  {
    label: "OUR PROJECTS",
    href: "/projects",
    dropdown: ["Interior Design", "3D & 2D Rendering"],
  },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Desktop dropdown state
  const [dropdownOpen, setDropdownOpen] = useState(null);

  // Mobile dropdown state
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  // Search state
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (!searchQuery.trim()) return;

    console.log("Searching for:", searchQuery);

    // Connect this later to your search page if required
    // window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
  };

  return (
    <nav className="sticky top-0 relative z-50 w-full bg-[#F7F6F2] text-[#1C1C1A] font-[Poppins]">

      {/* ================= HEADER ================= */}
      <div className="flex w-full items-center justify-between px-6 py-6 sm:px-8 lg:px-10 lg:py-7 xl:px-16">

        {/* ================= LOGO ================= */}
        <a
          href="/"
          className="flex shrink-0 flex-col leading-[1.15] no-underline"
        >
          <span className="font-serif text-xl sm:text-2xl">
            Km Kumhars
          </span>

          <span className="font-serif text-xl sm:text-2xl">
            Design Studio
          </span>
        </a>


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
              <a
                href={link.href}
                className="flex items-center gap-1 text-[12px] font-bold uppercase tracking-wide text-[#1C1C1A] no-underline transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1C1A] lg:text-[13px]"
              >
                {link.label}

                {link.dropdown && (
                  <ChevronDown
                    size={14}
                    strokeWidth={2.5}
                  />
                )}
              </a>


              {/* ================= DESKTOP DROPDOWN ================= */}
              {link.dropdown &&
                dropdownOpen === link.label && (
                  <ul className="absolute left-0 top-full m-0 min-w-52.5 list-none bg-[#EFEDE4] py-2 pt-4 shadow-lg">

                    {link.dropdown.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="block px-4 py-2.5 text-[13px] text-[#1C1C1A] no-underline transition-opacity hover:opacity-60"
                        >
                          {item}
                        </a>
                      </li>
                    ))}

                  </ul>
                )}
            </li>
          ))}


          {/* ================= DESKTOP SEARCH ================= */}
          <li className="relative">

            {!searchOpen ? (
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex cursor-pointer items-center justify-center border-none bg-transparent p-1 text-[#1C1C1A] transition-opacity hover:opacity-60"
              >
                <Search
                  size={19}
                  strokeWidth={2}
                />
              </button>
            ) : (

              <form
                onSubmit={handleSearch}
                className="flex items-center border-b border-[#1C1C1A] bg-transparent"
              >

                <Search
                  size={17}
                  strokeWidth={2}
                  className="mr-1 shrink-0"
                />

                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search"
                  autoFocus
                  className="w-24 bg-transparent px-1 py-1 text-[12px] text-[#1C1C1A] outline-none placeholder:text-[#1C1C1A]/60 lg:w-28"
                />

                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  aria-label="Close search"
                  className="cursor-pointer border-none bg-transparent p-1 text-[#1C1C1A] hover:opacity-60"
                >
                  <X size={14} />
                </button>

              </form>
            )}

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
              placeholder="Search"
              className="w-full bg-transparent text-[13px] text-[#1C1C1A] outline-none placeholder:text-[#1C1C1A]/60"
            />

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

                    {/* 
                      MAIN LINK

                      Clicking the text will directly open:
                      /services
                      /projects
                    */}
                    <a
                      href={link.href}
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenMobileDropdown(null);
                      }}
                      className="flex-1 py-3 text-[13px] font-bold uppercase tracking-wide text-[#1C1C1A] no-underline sm:text-[15px]"
                    >
                      {link.label}
                    </a>


                    {/* 
                      DROPDOWN BUTTON

                      Clicking only the arrow opens/closes
                      the dropdown.
                    */}
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
                        <li key={item}>

                          <a
                            href="#"
                            onClick={() => {
                              setOpenMobileDropdown(null);
                              setMobileOpen(false);
                            }}
                            className="block py-1 text-[12px] text-[#1C1C1A] opacity-80 no-underline sm:text-[14px]"
                          >
                            {item}
                          </a>

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

                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between py-3 text-[13px] font-bold uppercase tracking-wide text-[#1C1C1A] no-underline sm:text-[15px]"
                  >
                    {link.label}
                  </a>

                </li>

              )
            )}

          </ul>

        </div>
      )}

    </nav>
  );
}