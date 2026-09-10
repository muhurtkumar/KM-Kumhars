import React from "react";
import { Link } from "react-router-dom";

// Turns a label like "Interior Decor & Styling" into "interior-decor-styling"
// so it always matches the id you put on the section in your page.
const slugify = (str) =>
  str
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const navItems = [
  ["Homepage", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Project", "/projects"],
  ["Contact Us", "/contact"],
];

const SERVICES = [
  "Residential",
  "Commercial",
  "Interior Decor & Styling",
  "Space Planning",
  "Retail & Hospitality Design",
  "Design Consultation",
  "Custom Furniture Design",
];

const Footer = () => {
  return (
    <footer className="font-[Poppins] text-[#3F3F3F]">
      <div className="relative">
        {/* The white page area behind the upper half of the Figma CTA card. */}
        <div aria-hidden="true" className="h-40.25 bg-white" />

        {/* Figma CTA card: 1340 × 323, overlapping the white and cream areas. */}
        <section className="absolute left-1/2 top-8 z-10 h-80.75 w-[calc(100%-2rem)] max-w-270 -translate-x-1/2 bg-[#636139] text-white sm:w-[calc(100%-3rem)]">
          <div className="flex h-full flex-col items-center justify-center py-20 text-center">
            <h2 className="max-w-278 text-[38px] font-black uppercase leading-[1.15] tracking-[4.2px] sm:text-[50px] lg:text-[60px]">
              Let&apos;s Design Your Next Space Together
            </h2>
            <Link
              to="/contact"
              className="relative mt-8 flex h-18.25 w-47.5 shrink-0 items-center justify-center overflow-hidden text-[15px] font-semibold uppercase tracking-[1.5px]"
            >
              <button
                type="button"
                className="group relative flex h-40.25 w-full items-center justify-center overflow-hidden rounded-lg bg-[#87864E] px-4 font-['Poppins'] text-[15px] font-semibold uppercase tracking-[2px] text-white sm:w-49.5"
              >
                {/* Sliding Background */}
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#919064] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

                {/* Button Text */}
                <span className="relative z-10">Contact Us</span>
              </button>
            </Link>
          </div>
        </section>

        {/* Footer background starts at the card midpoint; content clears the overlap. */}
        <div className="bg-[#E8E7CE]/90 pt-63.5 sm:pt-65.5 lg:pt-40.5">
          <div className="mx-auto grid w-[calc(100%-3rem)] max-w-270 grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[427px_313px_1fr] lg:gap-x-12 lg:py-18 ">
            <section className="md:col-span-2 lg:col-span-1">
              <FooterTitle>Information</FooterTitle>
              <p className="max-w-106.75 text-[12px] leading-[1.7] lg:text-[14px]">
                KM Kumhars Design Studio creates timeless, functional interiors
                for homes, offices, and businesses — spaces built with clarity,
                craft, and purpose.
              </p>
              <div className="mt-7 flex gap-5 text-[30px] text-[#757575]">
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="transition hover:text-[#636139]"
                >
                  <i className="fa-brands fa-square-facebook" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="transition hover:text-[#636139]"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
              </div>
            </section>
            <nav aria-label="Footer navigation">
              <FooterTitle>Navigation</FooterTitle>
              <ul className="space-y-1.5 text-[12px] lg:text-[14px]">
                {navItems.map(([label, href]) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="flex items-center gap-3.5 transition hover:text-[#636139]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section id="services-footer-nav">
              <FooterTitle>Our Services</FooterTitle>
              <ul className="space-y-1 text-[12px] lg:text-[14px]">
                {SERVICES.map((service) => (
                  <li key={service}>
                    <Link
                      to={`/services#${slugify(service)}`}
                      className="flex items-center gap-3.5 transition hover:text-[#636139]"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="border-t border-[#757575]/45">
            <div
              className="
                mx-auto flex
                w-[calc(100%-2rem)]
                max-w-270
                flex-col
                gap-3
                py-4
                text-[10px]
                font-semibold
                uppercase
                tracking-[1px]
                text-center
                sm:w-[calc(100%-3rem)]
                sm:text-[11px]

                md:gap-5
                md:py-6.25
                md:text-[12px]
                md:tracking-[1.5px]

                lg:flex-row
                lg:items-center
                lg:justify-between
                "
            >
              <p className="leading-[1.4]">
                Allright Reserved - Kumhars Interior
              </p>

              <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center">
                <a href="#disclaimer" className="hover:text-[#636139]">
                  Disclaimer
                </a>

                <a href="#privacy" className="hover:text-[#636139]">
                  Privacy Policy
                </a>

                <a href="#terms" className="hover:text-[#636139]">
                  Term Of Use
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterTitle = ({ children }) => (
  <h4 className="mb-3 text-[13px] lg:text-[15px] font-bold gap-2 uppercase leading-none tracking-[1.75px] text-[#0A0806]">
    {children}
  </h4>
);

export default Footer;