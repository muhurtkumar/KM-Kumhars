import quoteImage from "../../assets/about/quote-image.png";
import { Phone } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="mt-8 xl:mt-35 w-full bg-white">
      {/* =========================================================
          QUOTE + CALL US NOW
          ========================================================= */}
      {/* Quote + Call Us Section */}
      <section className="mt-8 w-full bg-white xl:mt-35">
        {/* =========================================================
      QUOTE + CALL US NOW
      ========================================================= */}
        <section className="relative w-full bg-[#263900]">
          <div
            className="
        relative mx-auto
        min-h-[345px]
        max-w-[1250px]
        px-4
        sm:min-h-[360px] sm:px-8
        md:min-h-[380px] md:px-10
        lg:min-h-[400px] lg:px-12
      "
          >
            {/* =====================================================
          IMAGE
          The image intentionally sits slightly outside the
          top of the green section.
          ===================================================== */}
            <div
              className="
          absolute
          left-4
          top-[-30px]
          w-[145px]
          sm:left-8
          sm:top-[-30px]
          sm:w-[190px]
          md:left-10
          md:top-[-35px]
          md:w-[230px]
          lg:left-12
          lg:top-[-55px]
          lg:w-[350px]
        "
            >
              <img
                src={quoteImage}
                alt="Interior designed by KM Kumhars Design Studio"
                className="h-auto w-full object-cover"
              />

              {/* ===================================================
            CALL US NOW CARD
            Overlaps the bottom-right corner of the image.
            =================================================== */}
              <div
                className="
            absolute
            bottom-[-28px]
            right-[-28px]
            w-[145px]
            bg-[#F7F6F2]
            px-3
            py-3
            sm:bottom-[-40px]
            sm:right-[-45px]
            sm:w-[180px]
            sm:p-5
            md:w-[200px]
            lg:w-[220px]
          "
              >
                {/* Phone icon */}
                <Phone
                  className="
              mb-2
              h-4
              w-4
              text-[#777777]
              sm:h-5
              sm:w-5
            "
                  strokeWidth={2.5}
                />

                <p
                  className="
              font-[Poppins]
              text-[8px]
              font-bold
              uppercase
              sm:text-[10px]
              md:text-[11px]
            "
                >
                  CALL US NOW
                </p>

                <p
                  className="
              mt-1
              font-[Poppins]
              text-[6px]
              text-[#666666]
              sm:mt-2
              sm:text-[8px]
              md:text-[9px]
            "
                >
                  (+92) 123 456 789
                </p>
              </div>
            </div>

            {/* =====================================================
          QUOTE
          Font and available width scale with the screen.
          ===================================================== */}
            <div
              className="
          flex
          min-h-[345px]
          items-center
          justify-end
          pl-[175px]
          sm:min-h-[360px]
          sm:pl-[245px]
          md:min-h-[380px]
          md:pl-[320px]
          lg:min-h-[380px]
          lg:pl-[420px]
        "
            >
              <h2
                className="
            w-full
            max-w-[150px]
            font-[Poppins]
            text-[18px]
            font-black
            uppercase
            leading-[1.25]
            tracking-wide
            text-white
            sm:max-w-[250px]
            sm:text-[27px]
            md:max-w-[400px]
            md:text-[32px]
            lg:max-w-[620px]
            lg:text-[45px]
            xl:text-[50px]
          "
              >
                "DRIVEN BY HARD WORK. DEFINED BY QUALITY."
              </h2>
            </div>
          </div>
        </section>
      </section>

      {/* =========================================================
          FOUNDER'S NOTE
          ========================================================= */}
      <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-16 ">
        <div
          className="
            border-l-[5px]
            border-[#858C4A]
            bg-[#F7F6F2]
            px-5
            py-8
            sm:px-7
            sm:py-10
            lg:px-8
            lg:py-11
          "
        >
          {/* Section label */}
          <p className="font-[Poppins] text-[11px] font-bold uppercase tracking-wide text-[#A4A6AE] sm:text-[13px]">
            FOUNDER'S NOTE
          </p>

          {/* Founder quote */}
          <blockquote
            className="
              mt-4
              max-w-[850px]
              font-serif
              text-[18px]
              leading-[1.45]
              text-[#211F1F]
              sm:text-[21px]
              lg:text-[23px]
            "
          >
            "Great design isn't about following trends — it’s about
            understanding a person, a business, or a story, and shaping a space
            around it. That's what we set out to do with every project."
          </blockquote>

          {/* Founder information */}
          <div className="mt-5">
            <p className="font-serif text-[13px] font-bold text-[#211F1F] sm:text-[14px]">
              Founder Name
            </p>

            <p className="mt-1 font-serif text-[10px] text-[#444444] sm:text-[11px]">
              Founder & Principal Designer, KM Kumhars Design Studio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
