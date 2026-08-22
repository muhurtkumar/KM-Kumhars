import quoteImage from "../../assets/about/quote-image.png";
import { Phone } from "lucide-react";

export default function QuoteSection() {
  return (
    <section className="w-full bg-white pt-15 sm:pt-20 md:pt-26 lg:pt-30 xl:pt-35">
      {/* QUOTE + CALL US NOW */}
      <section className="relative w-full bg-[#263900]">
        <div
          className="
            relative mx-auto w-full max-w-[1395px]
            px-6 min-h-[180px]
            sm:min-h-[300px] sm:px-8
            md:min-h-[420px] md:px-10
            lg:min-h-[400px] lg:px-16
            xl:px-20
          "
        >
          {/* IMAGE + CALL US CARD */}
          <div
            className="
              absolute left-6 top-[-30px] z-20 w-[180px]
              sm:left-8 sm:top-[-35px] sm:w-[220px]
              md:left-10 md:top-[-40px] md:w-[280px]
              lg:left-16 lg:top-[-55px] lg:w-[350px]
            "
          >
            <div className="overflow-hidden">
              <img
                src={quoteImage}
                alt="Interior designed by KM Kumhars Design Studio"
                className="h-auto w-full object-cover transition-transform duration-500 ease-out hover:scale-[1.05]"
              />
            </div>

            {/* CALL US CARD */}
            <div
              className="
                absolute bottom-[-38px] right-[-80px] z-30 w-[165px]
                border-2 bg-[#F7F6F2] px-4 py-4
                sm:bottom-[-42px] sm:right-[-35px] sm:w-[190px] sm:px-5 sm:py-5
                md:bottom-[-45px] md:right-[-40px] md:w-[205px] md:px-5 md:py-5
                lg:bottom-[-50px] lg:right-[-45px] lg:w-[220px] lg:px-6 lg:py-6
              "
            >
              <div className="mb-2">
                <Phone
                  className="h-5 w-5 text-[#777777] sm:h-6 sm:w-6 md:h-6 md:w-6 lg:h-7 lg:w-7"
                  strokeWidth={2}
                />
              </div>
              <p className="font-[Poppins] text-[9px] font-bold uppercase text-[#211F1F] sm:text-[10px] md:text-[10px] lg:text-[11px]">
                CALL US NOW
              </p>
              <p className="mt-2 font-[Poppins] text-[7px] text-[#666666] sm:text-[8px] md:text-[8px] lg:text-[9px]">
                (+92) 123 456 789
              </p>
            </div>
          </div>

          {/* QUOTE TEXT */}
          {/* QUOTE TEXT */}
          <div
            className="
    flex min-h-[100px] justify-center pb-12 pt-[190px]
    sm:min-h-[300px] sm:px-5 sm:pt-[260px]
    md:min-h-[280px] md:px-8 md:pt-[240px]
    lg:min-h-[400px] lg:items-center lg:justify-end lg:px-0 lg:pb-0 lg:pt-0 lg:pl-[440px]
  "
          >
            <h2
              className="
      w-full max-w-[320px] text-center font-[Poppins]
      text-[25px] font-black uppercase leading-[1.2] tracking-wide text-white
      sm:max-w-[500px] sm:text-[45px]
      md:max-w-[560px] md:text-[50px]
      lg:max-w-[620px] lg:text-left lg:text-[55px]
      xl:text-[50px]
    "
            >
              "DRIVEN BY HARD WORK. DEFINED BY QUALITY."
            </h2>
          </div>
        </div>
      </section>

      {/* FOUNDER'S NOTE */}
      <div className="relative mx-auto w-full max-w-[1395px] px-6 py-10 sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-16 xl:px-20 xl:py-20">
        <div className="border-l-[5px] border-[#858C4A] bg-[#F7F6F2] px-5 py-8 sm:px-7 sm:py-10 lg:px-8 lg:py-11">
          <p className="font-[Poppins] text-[15px] font-bold uppercase tracking-wide text-[#A4A6AE] sm:text-[20px] lg:text-[25px]">
            FOUNDER'S NOTE
          </p>

          <blockquote className="mt-4 max-w-[1500px] font-serif text-[20px] leading-[1.45] text-[#211F1F] sm:text-[28px] lg:text-[35px]">
            "Great design isn't about following trends — it's about
            understanding a person, a business, or a story, and shaping a space
            around it. That's what we set out to do with every project."
          </blockquote>

          <div className="mt-5">
            <p className="font-serif text-[13px] font-bold text-[#211F1F] sm:text-[14px] lg:text-[25px]">
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
