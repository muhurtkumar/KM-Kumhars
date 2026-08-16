import React from "react";

const ContactHero = () => {
  return (
    <section className="flex w-full justify-center bg-[#E9EDE2] px-5 pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32 lg:pt-24">
      <div className="flex w-full max-w-[1000px] flex-col items-center text-center">
      <p className="mb-5 font-['Poppins'] text-[12px] font-bold uppercase tracking-[0.08em] text-[#757575] sm:text-[14px] lg:text-[15px]">
          Get In Touch
        </p>
        <h1 className="max-w-[923px] font-['Inter'] text-[42px] font-bold leading-[1.2] tracking-[-1.2px] text-[#293801] sm:text-[54px] sm:tracking-[-1.6px] lg:text-[72px] lg:tracking-[-2.16px]">
          Let's Talk About Your Space
        </h1>

        <p className="mt-7 max-w-[655px] font-['Poppins'] text-[14px] font-normal leading-[1.6] text-[#3F3F3F] sm:text-[16px] lg:text-[17px] lg:leading-normal">
          Whether it's a home, an office, or a retail space — tell us a
          little about your project and we'll get back to you within 24
          hours.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;