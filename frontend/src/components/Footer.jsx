import React from "react";

const navItems = [
  ["Homepage", "/"],
  ["About Us", "/about"],
  ["Services", "/services"],
  ["Project", "/projects"],
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
            <a
              href="#contact"
              className="relative mt-8 flex h-18.25 w-47.5 shrink-0 items-center justify-center overflow-hidden text-[15px] font-semibold uppercase tracking-[1.5px]"
            >
              <button
                type="submit"
                className="h-16.25 w-full rounded-md  bg-[#87864E] text-[15px] font-semibold uppercase tracking-[1.5px] text-white transition hover:bg-[#979663] sm:w-49.5"
              >
                Contact Us
              </button>
            </a>
          </div>
        </section>

        {/* Footer background starts at the card midpoint; content clears the overlap. */}
        <div className="bg-[#E8E7CE]/90 pt-63.5 sm:pt-65.5 lg:pt-40.5">
          <div className="mx-auto grid w-[calc(100%-3rem)] max-w-270 grid-cols-1 gap-12 pb-14 md:grid-cols-2 lg:grid-cols-[427px_313px_1fr] lg:gap-x-12 lg:py-18 ">
            <section className="md:col-span-2 lg:col-span-1">
              <FooterTitle>Information</FooterTitle>
              <p className="max-w-106.75 text-[17px] leading-[1.7]">
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
                  href="#youtube"
                  aria-label="YouTube"
                  className="transition hover:text-[#636139]"
                >
                  <i className="fa-brands fa-square-youtube" />
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="transition hover:text-[#636139]"
                >
                  <i className="fa-brands fa-instagram" />
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="transition hover:text-[#636139]"
                >
                  <i className="fa-brands fa-linkedin" />
                </a>
              </div>
            </section>
            <nav aria-label="Footer navigation">
              <FooterTitle>Navigation</FooterTitle>
              <ul className="space-y-3.5 text-[17px]">
                {navItems.map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="flex items-center gap-3.5 transition hover:text-[#636139]"
                    >
                      <i className="fa-solid fa-angle-right text-[20px] text-[#757575]" />
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <section id="contact">
              <FooterTitle>Contact Us</FooterTitle>

              <div className="space-y-3.5 text-[17px]">
                <p className="flex items-start gap-3.5">
                  <i className="fa-solid fa-location-dot mt-1 text-[20px] text-[#757575]" />
                  Lumbung Hidup East Java
                </p>

                <a
                  href="mailto:hello@homco.com"
                  className="flex items-center gap-3.5 transition hover:text-[#636139]"
                >
                  <i className="fa-solid fa-envelope text-[20px] text-[#757575]" />
                  Hello@Homco.com
                </a>
              </div>

              <form
                className="mt-6 flex flex-col gap-3"
                onSubmit={(event) => event.preventDefault()}
              >
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>

                {/* Email input */}
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Email Address"
                  className="h-14.25 w-full border-0 border-b-4 border-[#757575] bg-white/25 px-5 text-[17px] outline-none placeholder:text-[#6E6E6E] focus:ring-2 focus:ring-[#87864E]"
                />

                {/* Subscribe button */}
                <button
                  type="submit"
                  className="h-16.25 w-40 rounded-md bg-[#87864E] text-[15px] font-semibold uppercase tracking-[1.5px] text-white transition hover:bg-[#636139] sm:w-49.5"
                >
                  Subscribe
                </button>
              </form>
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
                text-[11px]
                font-semibold
                uppercase
                tracking-[1px]
                text-center
                sm:w-[calc(100%-3rem)]
                sm:text-[13px]

                md:gap-5
                md:py-6.25
                md:text-[15px]
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
  <h4 className="mb-6 text-[18px] font-bold gap-2 uppercase leading-none tracking-[1.75px] text-[#0A0806]">
    {children}
  </h4>
);

export default Footer;
