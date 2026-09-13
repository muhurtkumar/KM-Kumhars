import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    const formData = new FormData(e.target);

    const data = {
      fullName: formData.get("fullName"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      projectType: formData.get("projectType"),
      message: formData.get("message"),
      _subject: "New Project Enquiry - KM Kumhars Design Studio",
    };

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/testerweb2909@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (result.success) {
        toast.success("Your message has been sent successfully!");
        e.target.reset();
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Unable to send your message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
        {/* Full Name + Phone */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-4">
          {/* Full Name */}
          <div className="min-w-0">
            <label htmlFor="fullName" className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]">
              Full Name <span className="text-red-500">*</span>
            </label>

            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px]"
            />
          </div>

          {/* Phone */}
          <div className="min-w-0">
            <label htmlFor="phone" className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]">
              Phone Number <span className="text-red-500">*</span>
            </label>

            <input
              id="phone"
              name="phone"
              type="tel"
              required
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
              className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px]"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]">
            Email Address <span className="text-red-500">*</span>
          </label>

          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none transition focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px]"
          />
        </div>

        {/* Project Type */}
        <div>
          <label htmlFor="projectType" className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]">
            Project Type <span className="text-red-500">*</span>
          </label>

          <input
            id="projectType"
            name="projectType"
            type="text"
            required
            placeholder="Residential / Commercial / Retail & Hospitality"
            className="h-10 w-full rounded-[4px] bg-white px-3 font-['Poppins'] text-[12px] text-[#333] outline-none placeholder:text-[12px] placeholder:text-[#999] focus:ring-1 focus:ring-[#8C8C52] sm:text-[13px] sm:placeholder:text-[13px]"
          />
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="message" className="mb-2 block font-['Poppins'] text-[12px] text-[#555] sm:text-[13px]">
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
          disabled={isSubmitting}
          className="group relative flex h-10 w-full items-center justify-center overflow-hidden rounded-[3px] bg-[#87864E] px-4 font-['Poppins'] text-[14px] font-bold uppercase tracking-[2px] text-white sm:h-11 sm:text-[15px]"
        >
          {/* Sliding Background */}
          <span className="absolute inset-0 origin-left scale-x-0 bg-[#6f6e3f] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

          {/* Button Text */}
          <span className="relative z-10 cursor-pointer">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
