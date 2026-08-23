import { CheckCircle } from "lucide-react";
import KumharsOffice from "../../assets/Hero/KumharsOffice.png";

export default function AboutSection() {
  const benefits = [
    "Flexible Time",
    "Perfect Work",
    "Client Priority",
    "Timely Project Delivery",
    "Premium Quality Materials",
    "End-to-End Execution",
  ];

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-[1340px] px-5 md:px-7 lg:px-10">

        {/* MOBILE + MEDIUM HEADING */}
        <div className="mb-8 lg:hidden">
          <p className="mb-3 text-[15px] font-black uppercase tracking-[0.35em] text-[#757575] font-[Poppins]">
            Who we are
          </p>

          <h2 className="max-w-[655px] text-[25px] font-black font-[Poppins] uppercase leading-tight tracking-[0.07em] text-[#1b1717] sm:text-[38px] max-lg:max-w-none">
            Creating spaces that reflect your vision
          </h2>
        </div>

        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-[44px]">

          {/* IMAGE */}
          <div className="relative w-full min-w-0 overflow-hidden">
            <img
              src={KumharsOffice}
              alt="Modern interior design"
              className="h-auto w-full lg:absolute lg:inset-0 lg:h-full lg:w-full lg:scale-110 lg:object-cover lg:object-left"
            />
          </div>

          {/* CONTENT */}
          <div className="min-w-0 w-full">

            {/* DESKTOP HEADING */}
            <div className="hidden lg:block">
              <p className="mb-3 text-[15px] font-black uppercase tracking-[0.35em] text-[#757575] font-[Poppins]">
                Who we are
              </p>

              <h2 className="max-w-[655px] text-[25px] font-black font-[Poppins] uppercase leading-tight tracking-[0.07em] text-[#1b1717] sm:text-[38px] lg:text-[35px]">
                Creating spaces that reflect your vision
              </h2>
            </div>

            <div className="lg:mt-4 max-w-[655px] space-y-4 text-[13px] font-[Poppins] leading-relaxed text-[#6e6e6e] max-lg:max-w-none sm:text-[14px] md:text-[14px] lg:text-[15px]">
              <p>
                Whether it's a dream home, a contemporary office, or a
                sophisticated retail space, we transform ideas into thoughtfully
                designed environments. Our approach combines creativity,
                functionality, and precision to deliver interiors that are
                timeless, practical, and uniquely yours.
              </p>

              <p>
                From concept development and space planning to furniture design
                and styling, every detail is carefully crafted to create spaces
                that inspire.
              </p>
            </div>

            <ul className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2 font-[Poppins]">
              {benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-center gap-3 text-[13px] text-[#6e6e6e] sm:text-[14px] md:text-[15px] lg:text-[16px]"
                >
                  <CheckCircle
                    size={20}
                    strokeWidth={2.5}
                    className="shrink-0 text-[#4caf50]"
                  />
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="group relative mt-8 inline-flex h-[46px] w-[168px] md:h-[62px] md:w-[198px] items-center justify-center overflow-hidden rounded-[10px] bg-[#87864E] text-[15px] sm:text-[16px] lg:text-[17px]font-semibold uppercase tracking-[0.1em] text-white font-[Poppins]"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#6f6e3f] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

              <span className="relative z-10 font-[Poppins]">
                Discover More
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}