import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  { label: "OUR SERVICES", href: "#services" },
  {
    label: "OUR PROJECTS",
    href: "#projects",
    dropdown: ["Interior Design", "3D & 2D Rendering"],
  },
  { label: "CONTACT US", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop hover dropdown
  const [openMobileDropdown, setOpenMobileDropdown] = useState(false); // mobile tap dropdown

  return (
    <nav className="w-full bg-[#F7F6F2] text-[#1C1C1A] relative z-50">
      <div className="w-full flex items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-16 py-6 lg:py-7">
        {/* Logo */}
        <a
          href="#home"
          className="flex flex-col leading-[1.15] shrink-0 no-underline"
        >
          <span className="font-serif text-xl sm:text-2xl">Km Kumhars</span>
          <span className="font-serif text-xl sm:text-2xl">
            Design Studio
          </span>
        </a>

        {/* Desktop  nav — unchanged, simple hover dropdown */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-7 xl:gap-9 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li
              key={link.label}
              className="relative"
              onMouseEnter={() => link.dropdown && setDropdownOpen(true)}
              onMouseLeave={() => link.dropdown && setDropdownOpen(false)}
            >
              <a
                href={link.href}
                className="flex items-center gap-1 text-[14px] lg:text-[15px] font-bold tracking-wide uppercase no-underline text-[#1C1C1A] hover:opacity-60 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1C1C1A]"
              >
                {link.label}
                {link.dropdown && (
                  <ChevronDown size={14} strokeWidth={2.5} />
                )}
              </a>

              {link.dropdown && dropdownOpen && (
                <ul className="absolute top-full left-0 pt-4 min-w-52.5 bg-[#EFEDE4] shadow-lg py-2 list-none m-0">
                  {link.dropdown.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="block px-4 py-2.5 text-[13px] no-underline text-[#1C1C1A] hover:opacity-60 transition-opacity"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Hamburger — phone/tablet only */}
        <button
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden items-center justify-center w-11 h-9 sm:w-12 sm:h-10 shrink-0 bg-[#1C1C1A] text-white border-none cursor-pointer focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#1C1C1A]"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile / tablet menu — items with a dropdown are now real toggle buttons */}
      {mobileOpen && (
        <div className="md:hidden bg-[#F7F6F2] border-t border-black/10 px-6 sm:px-8 pb-6 pt-4">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 list-none m-0 p-0">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li
                  key={link.label}
                  className="border-b border-black/5 sm:border-none"
                >
                  <button
                    type="button"
                    onClick={() => setOpenMobileDropdown((v) => !v)}
                    aria-expanded={openMobileDropdown}
                    className="w-full flex items-center justify-between py-3 text-[13px] font-bold tracking-wide uppercase text-[#1C1C1A] bg-transparent border-none cursor-pointer"
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      strokeWidth={2.5}
                      className={`transition-transform duration-200 ${
                        openMobileDropdown ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openMobileDropdown && (
                    <ul className="list-none m-0 pb-3 pl-3 flex flex-col gap-2">
                      {link.dropdown.map((item) => (
                        <li key={item}>
                          <a
                            href="#"
                            onClick={() => {
                              setOpenMobileDropdown(false);
                              setMobileOpen(false);
                            }}
                            className="block py-1 text-[12px] no-underline text-[#1C1C1A] opacity-80"
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
                    className="flex items-center justify-between py-3 text-[13px] font-bold tracking-wide uppercase no-underline text-[#1C1C1A]"
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