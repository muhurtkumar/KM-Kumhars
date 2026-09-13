import { Link } from "react-router-dom";

import NotFoundImage from "../assets/404NotFound/NotFoundImage.png";

export default function NotFound() {
  return (
    <main className="w-full overflow-hidden font-[Poppins]">
      <section className="relative mx-auto flex w-full max-w-[1600px] flex-col lg:flex-row">

        {/* LEFT CONTENT */}
        <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-6 py-14 text-center sm:px-10 md:px-14 lg:w-[53%] lg:flex-none lg:px-[8%] lg:py-0 lg:text-left xl:w-[52%] xl:px-[9%]">

          {/* OOPS - DESKTOP ONLY */}
          <p className="hidden text-[11px] font-medium uppercase tracking-[0.35em] text-[#66683D] sm:text-[12px] md:text-[13px] lg:block lg:text-[14px]">
            Oops!
          </p>

          {/* 404 */}
          <h1 className="mt-0 font-serif text-[100px] font-light leading-[0.8] tracking-[-0.06em] text-[#5D6038] sm:text-[125px] md:text-[150px] lg:mt-2 lg:text-[180px] xl:text-[200px]">
            404
          </h1>

          {/* PAGE NOT FOUND */}
          <h2 className="mt-7 text-[17px] font-medium uppercase tracking-[0.22em] text-[#66683D] sm:text-[19px] md:text-[21px] lg:text-[23px] lg:tracking-[0.25em] xl:text-[25px]">
            Page Not Found
          </h2>

          {/* DECORATIVE LINE - MOBILE + TABLET */}
          <div className="mx-auto mt-5 h-[1px] w-[65px] bg-[#66683D] lg:hidden"></div>

          {/* DESCRIPTION */}
          <p className="mx-auto mt-5 max-w-[360px] text-[12px] font-normal leading-[1.7] text-[#555555] sm:max-w-[420px] sm:text-[13px] md:max-w-[470px] md:text-[14px] lg:mx-0 lg:mt-6 lg:max-w-[470px] lg:text-[15px] xl:text-[16px]">
            <span className="lg:hidden">
              The space you're looking for doesn't exist
              <br />
              or has been moved.
            </span>

            <span className="hidden lg:inline">
              The page you're looking for seems to have
              <br />
              moved, been renamed, or doesn't exist.
            </span>
          </p>

          {/* BACK TO HOME */}
          <Link
            to="/"
            className="group relative mx-auto mt-7 flex h-[42px] w-fit items-center justify-center gap-5 overflow-hidden rounded-lg bg-[#99984D] px-7 text-[10px] font-medium uppercase tracking-[0.18em] text-white transition-all duration-300 sm:h-[44px] sm:px-8 sm:text-[11px] lg:mx-0 lg:mt-8 lg:h-[48px] lg:px-10 lg:text-[12px]"
          >
            {/* HOVER SLIDE */}
            <span className="absolute inset-0 origin-left scale-x-0 bg-[#77763C] transition-transform duration-500 ease-out group-hover:scale-x-100"></span>

            {/* BUTTON TEXT */}
            <span className="relative z-10">
              Back To Home
            </span>
          </Link>
        </div>

        {/* RIGHT IMAGE - LARGE SCREENS ONLY */}
        <div className="relative hidden h-[500px] w-full overflow-hidden lg:block lg:w-[47%] xl:w-[48%]">
          <img
            src={NotFoundImage}
            alt="Interior space"
            className="absolute inset-0 h-full w-full object-contain object-top"
          />
        </div>

      </section>
    </main>
  );
}