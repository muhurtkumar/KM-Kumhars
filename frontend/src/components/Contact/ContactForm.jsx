import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full rounded-xl bg-[#F1F2E8] px-5 py-7 sm:px-7 sm:py-8 lg:px-8 lg:py-9">
      {/* Heading */}
      <div className="mb-7 sm:mb-8">
        <p className="mb-3 font-['Poppins'] text-[12px] font-bold uppercase tracking-[0.08em] text-[#8C8C52] sm:text-[13px]">
          Send a Message
        </p>

        <h2 className="font-['Poppins'] text-[20px] font-bold leading-[1.3] text-[#293801] sm:text-[30px]">
          Start Your Project
        </h2>
      </div>

      <form className="space-y-5 sm:space-y-6">
        {/* Full Name + Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
          {/* Full Name */}
          <div className="min-w-0">
            <label
              htmlFor="fullName"
              className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]"
            >
              Full Name
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px]"
            />
          </div>

          {/* Phone */}
          <div className="min-w-0">
            <label
              htmlFor="phone"
              className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]"
            >
              Phone Number
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]"
          >
            Email Address
          </label>

          <input
            id="email"
            name="email"
            type="email"
            className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px]"
          />
        </div>

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]"
          >
            Project Type
          </label>

          <input
            id="projectType"
            name="projectType"
            type="text"
            placeholder="Residential / Commercial / Retail & Hospitality"
            className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none placeholder:text-[12px] placeholder:text-[#999] focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px] sm:placeholder:text-[13px]"
          />
        </div>

        {/* Project Description */}
        <div>
          <label
            htmlFor="message"
            className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]"
          >
            Tell Us About Your Project
          </label>

          <textarea
            id="message"
            name="message"
            rows="5"
            className="min-h-[120px] w-full resize-y rounded-[4px] bg-white px-3 py-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:min-h-[135px] sm:text-[13px]"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="h-10 w-full rounded-[3px] bg-[#3d4d13] px-4 font-['Poppins'] text-[12px] font-bold uppercase tracking-[0.06em] text-white transition hover:bg-[#7F803F] sm:h-11 sm:text-[13px]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;