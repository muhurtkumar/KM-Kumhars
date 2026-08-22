import React from "react";
import WhyChooseUsImg from "../../assets/Hero/WhyChooseUs.png";

const features = [
  "On-time delivery — projects completed within agreed timelines",
  "Meticulous craftsmanship — every detail refined to perfection",
  "Client-first approach — your vision guides every decision",
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid w-full max-w-[1340px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-[44px] lg:px-10">
        
        {/* Image */}
        <div className="h-full w-full min-w-0 overflow-hidden">
          <div className="relative aspect-[1.47/1] w-full lg:h-full lg:aspect-auto">
            <img
              src={WhyChooseUsImg}
              alt="Interior design project"
              className="absolute inset-0 h-full w-full object-cover lg:relative lg:h-full lg:w-full"
            />
          </div>
        </div>

        {/* Content */}
        <div className="min-w-0 w-full">
          
          {/* Small Heading */}
          <p className="mb-3 text-[14px] font-black uppercase tracking-[0.15em] text-[#757575] sm:text-[15px] lg:text-[16px]">
            Trust Us Now
          </p>

          {/* Main Heading */}
          <h2 className="max-w-[700px] text-[28px] font-black uppercase leading-[1.15] tracking-[0.04em] text-[#1B1717] sm:text-[34px] md:text-[38px] lg:text-[40px]">
            Why Choose Our Design Interior Services
          </h2>

          {/* Description */}
          <div className="mt-6 max-w-[700px] space-y-4 text-[14px] leading-[1.7] text-[#6E6E6E] sm:mt-7 sm:text-[16px] lg:mt-8 lg:text-[17px]">
            <p>
              From concept to final styling, every project is guided by
              careful planning and precise execution — so your space works as
              beautifully as it looks.
            </p>
          </div>

          {/* Features */}
          <ul className="mt-8 grid gap-x-8 gap-y-5 sm:mt-9">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex min-w-0 items-start gap-3 text-[14px] leading-[1.6] text-[#6E6E6E] sm:gap-4 sm:text-[16px] lg:text-[17px]"
              >
                <span
                  className="mt-[3px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#527E30] text-[11px] font-bold text-white sm:h-[21px] sm:w-[21px] sm:text-[12px]"
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span className="min-w-0">
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;