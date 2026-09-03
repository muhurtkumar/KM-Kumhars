import { ArrowRight } from "lucide-react";
import ctaImg from "../../assets/service/cta-dining.jpg";

const StartProject = () => {
  return (
<section className="px-4 pt-14 pb-6 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-20 lg:pb-10 font-[Poppins]">
      <div className="mx-auto w-full max-w-[1180px]">
        <div
          className="
            relative flex flex-col overflow-hidden rounded-[12px] bg-[#7b7d4c]
            lg:flex-row lg:items-stretch
          "
        >
          {/* Background image (mobile/tablet only) */}
          <div className="absolute inset-0 lg:hidden">
            <img
              src={ctaImg}
              alt=""
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#7b7d4c]/95 via-[#7b7d4c]/60 to-[#7b7d4c]/20" />
          </div>

          {/* Content */}
          <div
            className="
              relative z-10 flex w-full flex-col justify-center px-6 py-10 sm:px-10 sm:py-12
              lg:w-[46%] lg:px-12
            "
          >
            <span className="mb-4 block text-[13px] font-bold uppercase tracking-[0.15em] text-white/90 sm:text-[14px]">
              Ready To Transform Your Space
            </span>

            <h2 className="mb-7 text-[24px] font-bold leading-[1.3] text-white sm:text-[28px] lg:text-[30px]">
              Let&apos;s Create Something
              <br />
              Extraordinary Together.
            </h2>

            <a
              href="/contact"
              type="button"
              className="
                inline-flex w-fit items-center gap-2 rounded-[8px] bg-[#faf8f2]
                px-5 py-3 text-[13px] font-bold uppercase tracking-[0.1em] text-[#171717]
                transition-transform duration-200 hover:scale-[1.02] hover:bg-white
              "
            >
              Start Your Project
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
          </div>

          {/* Image (desktop only, blended into the olive panel) */}
          <div className="relative hidden lg:block lg:w-[54%]">
            <img
              src={ctaImg}
              alt="A warmly lit dining room with a wood table and upholstered chairs"
              className="h-full w-full object-cover"
            />
            <div
              className="
                pointer-events-none absolute inset-y-0 left-0 w-1/3
                bg-gradient-to-r from-[#7b7d4c] to-transparent
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartProject;