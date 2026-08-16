import React from "react";
import WhyChooseUsImg from "../../assets/Hero/WhyChooseUs.png"

const features = [
  "On-time delivery — projects completed within agreed timelines",
  "Meticulous craftsmanship — every detail refined to perfection",
  "Client-first approach — your vision guides every decision",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-12 lg:px-10">
        
        {/* Image */}
        <div className="relative w-full overflow-hidden">
          <div className="relative aspect-[1.47/1] w-full">
            <img
              src={WhyChooseUsImg}
              alt="Interior design project"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full">
          <p className="mb-4 text-[12px] font-black uppercase tracking-[0.1em] text-[#757575] sm:text-[17px]">
            Trust Us Now
          </p>

          <h2 className="max-w-[680px]  text-[25px] font-black uppercase leading-tight tracking-[0.05em] text-[#1B1717] sm:text-[38px] lg:text-[35px]">
            Why Choose Our Design Interior Services
          </h2>

          <p className="mt-7 max-w-[655px] text-[14px] font-normal leading-[1.7] text-[#6E6E6E] sm:text-[16px] lg:text-[17px]">
            From concept to final styling, every project is guided by careful
            planning and precise execution — so your space works as beautifully
            as it looks.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-4 text-[14px] font-normal leading-[1.5] text-[#6E6E6E] sm:text-[16px] lg:text-[17px]"
              >
                <span
                  className="mt-[2px] flex shrink-0 h-5 w-5 items-center justify-center rounded-full bg-[#527e30] text-[12px] font-bold text-white"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;