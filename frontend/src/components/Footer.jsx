import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

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
  const cardRef = useRef(null);
  const [halfCardHeight, setHalfCardHeight] = useState(0);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    const measure = () => setHalfCardHeight(el.offsetHeight / 2);
    measure();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(el);
    window.addEventListener("resize", measure);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <footer className="font-[Poppins] text-[#3F3F3F]">
      
      <div
        className="
          relative
          [--cta-gap-top:2rem] [--cta-gap-bottom:1.5rem]
          sm:[--cta-gap-top:2.5rem] sm:[--cta-gap-bottom:1.75rem]
          lg:[--cta-gap-top:2.5rem] lg:[--cta-gap-bottom:2rem]
        "
      >
        
        <div
          className="bg-white"
          style={{ height: `calc(var(--cta-gap-top) + ${halfCardHeight}px)` }}
        />

        <section
          ref={cardRef}
          className="
            absolute left-1/2 z-10 w-[calc(100%-2rem)] max-w-270
            -translate-x-1/2 -translate-y-1/2
            flex flex-col items-center justify-center gap-6
            bg-[#636139] px-6 py-10 text-center text-white
            sm:w-[calc(100%-3rem)] sm:gap-8 sm:px-10 sm:py-14
            lg:py-16
          "
          style={{ top: `calc(var(--cta-gap-top) + ${halfCardHeight}px)` }}
        >
          <h2 className="max-w-278 text-[38px] font-black uppercase leading-[1.15] tracking-[4.2px] sm:text-[50px] lg:text-[60px]">
            Let&apos;s Design Your Next Space Together
          </h2>

          <Link
            to="/contact"
            className="group relative flex h-14 w-full max-w-49.5 items-center justify-center overflow-hidden rounded-lg bg-[#87864E] px-8 py-4 font-['Poppins'] text-[15px] font-semibold uppercase tracking-[2px] text-white sm:h-16"
          >
            {/* Sliding Background */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#919064] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

            {/* Button Text */}
            <span className="relative z-10">Contact Us</span>
          </Link>
        </section>

        <div
          className="bg-[#E8E7CE]/90"
          style={{
            paddingTop: `calc(var(--cta-gap-bottom) + ${halfCardHeight}px)`,
          }}
        >
          <div className="mx-auto grid w-[calc(100%-3rem)] max-w-270 grid-cols-2 gap-x-6 gap-y-12 pb-14 lg:grid-cols-[427px_313px_1fr] lg:gap-x-12 lg:py-18 pt-6 sm:pt-8">
            <section className="col-span-2 lg:col-span-1">
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