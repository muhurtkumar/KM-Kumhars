import React from "react";

const ContactDetails = () => {
  return (
    <div className="flex w-full min-w-0 flex-col gap-5">
      {/* Map */}
      <div className="w-full overflow-hidden rounded-xl">
        <div className="relative h-[230px] w-full sm:h-[280px] lg:h-[300px]">
          <iframe
            title="Km Kumhars Design Studio Location"
            src="https://www.google.com/maps?q=Lucknow,Uttar+Pradesh,India&output=embed"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Studio Details */}
      <div className="w-full rounded-xl bg-[#3d4d13] px-6 py-7 text-white sm:px-7 sm:py-8 lg:px-8 lg:py-9 ">
        <h3 className="mb-6 font-['Poppins'] text-[14px] font-bold uppercase tracking-[0.08em] text-white sm:text-[15px] md:text-[16px] lg:text-[16px]">
          Studio Details
        </h3>

        <div className="space-y-5 sm:space-y-3">
          {/* Address */}
          <div>
            <p className="font-['Poppins'] text-[13px] text-white/60 sm:text-[14px] md:text-[15px] lg:text-[15px]">
              Address
            </p>

            <p className="break-words font-['Poppins'] text-[13px] font-medium leading-[1.6] text-white sm:text-[14px] lg:text-[15px]">
              Lumbung Hitup, East Java, Lucknow, Uttar Pradesh, India
            </p>
          </div>

          {/* Phone */}
          <div>
            <p className="font-['Poppins'] text-[13px] text-white/60 sm:text-[14px] lg:text-[15px]">
              Phone
            </p>

            <p className="font-['Poppins'] text-[13px] font-medium text-white sm:text-[14px] lg:text-[15px]">
              (+62) 123 456 789
            </p>
          </div>

          {/* Email */}
          <div>
            <p className="font-['Poppins'] text-[13px] text-white/60 sm:text-[14px] lg:text-[15px]">
              Email
            </p>

            <p className="break-all font-['Poppins'] text-[13px] font-medium text-white sm:text-[14px] lg:text-[15px]">
              hello@kmkumhars.com
            </p>
          </div>

          {/* Studio Hours */}
          <div>
            <p className="font-['Poppins'] text-[13px] text-white/60 sm:text-[14px]  lg:text-[15px]">
              Studio Hours
            </p>

            <p className="font-['Poppins'] text-[13px] font-medium leading-[1.6] text-white sm:text-[14px]  lg:text-[15px]">
              Mon – Sat: 10:00 AM – 7:00 PM
              <br />
              Sunday: By Appointment
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;