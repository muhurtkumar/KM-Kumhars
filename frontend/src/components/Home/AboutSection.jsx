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
      <div className="mx-auto grid max-w-[1340px] items-stretch gap-12 px-5 lg:grid-cols-2 lg:gap-[44px]">
        <div className="h-full w-full min-w-0 overflow-hidden">
          <img
            src={KumharsOffice}
            alt="Modern interior design"
            className="h-auto w-full lg:h-full lg:w-full lg:scale-110 lg:object-cover lg:object-left"
          />
        </div>

        <div className="min-w-0 w-full">
          <p className="mt-4 mb-3 text-[20px] font-black uppercase tracking-[0.35em] text-[#757575]">
            Who we are
          </p>

          <h2 className="max-w-[655px] text-[25px] font-black uppercase leading-tight tracking-[0.07em] text-[#1b1717] sm:text-[38px] lg:text-[35px] max-lg:max-w-none">
            Creating spaces that reflect your vision
          </h2>

          <div className="mt-6 max-w-[655px] space-y-4 text-[14px] leading-relaxed text-[#6e6e6e] max-lg:max-w-none sm:text-[16px] lg:text-[17px]">
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

          <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-center gap-3 text-[14px] text-[#6e6e6e] sm:text-[16px] lg:text-[17px]"
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
            className="group relative mt-12 inline-flex h-[66px] w-[198px] items-center justify-center overflow-hidden rounded-[10px] bg-[#87864E] text-[15px] font-semibold uppercase tracking-[0.1em] text-white"
          >
            {/* Sliding Background */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#6f6e3f] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

            {/* Text */}
            <span className="relative z-10">
              Discover More
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}