import React from "react";
import {
  CheckCircle2,
} from "lucide-react";

// Replace this path with your actual image path
import trustUsImage from "../../assets/about/trust-us.png";

const TRUST_POINTS = [
  "On-Time Delivery",
  "Transparent Pricing",
  "Dedicated Project Lead",
  "Quality Materials",
  "Post-Project Support",
  "Client-First Revisions",
];

export default function TrustUsNow() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-20">
      <div
        className="
          mx-auto
          w-full
          max-w-[1500px]
          px-6
          sm:px-8
          lg:px-10
          xl:px-0
        "
      >
        {/* =====================================================
            DESKTOP LAYOUT
            Image is on the left and starts at the main heading.
            ===================================================== */}
        <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-10 xl:gap-14">

          {/* ===================================================
              LEFT SIDE - IMAGE
              Hidden here on mobile because mobile needs the
              image after the heading.
              =================================================== */}
          <div
            className="
              hidden
              lg:block
              lg:self-stretch
            "
          >
            <img
              src={trustUsImage}
              alt="Interior design materials and mood board"
              className="
                h-full
                min-h-[470px]
                w-full
                object-cover
                object-center
              "
            />
          </div>

          {/* ===================================================
              RIGHT SIDE - CONTENT
              =================================================== */}
          <div className="flex flex-col">

            {/* Small heading */}
            <p
              className="
                font-[Poppins]
                text-[20px]
                font-bold
                uppercase
                tracking-wide
                text-[#777777]
                sm:text-[11px]
              "
            >
              TRUST US NOW
            </p>

            {/* Main heading */}
            <h2
              className="
                mt-5
                max-w-[1000px]
                font-[Poppins]
                text-[30px]
                font-black
                uppercase
                leading-[1.15]
                tracking-wide
                text-[#211F1F]
                sm:text-[36px]
                md:text-[40px]
                lg:text-[42px]
                xl:text-[46px]
              "
            >
              WHAT MAKES OUR
              <br />
              PROCESS DIFFERENT
            </h2>

            {/* =================================================
                MOBILE IMAGE

                This appears AFTER TRUST US NOW + main heading.
                It disappears on desktop.
                ================================================= */}
            <div className="mt-8 lg:hidden">
              <img
                src={trustUsImage}
                alt="Interior design materials and mood board"
                className="
                  h-[280px]
                  w-full
                  object-cover
                  object-center
                  sm:h-[340px]
                  md:h-[400px]
                "
              />
            </div>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-[620px]
                font-[Poppins]
                text-[25px]
                leading-[1.6]
                text-[#000000]
                sm:text-[15px]
                md:text-[20px]
                lg:mt-10
              "
            >
              We treat every project — big or small, residential or
              commercial — with the same discipline: clear timelines,
              honest communication, and craftsmanship that holds up
              over time.
            </p>

            {/* =================================================
                CHECKLIST
                ================================================= */}
            <div
              className="
                mt-8
                grid
                grid-cols-1
                gap-y-4
                sm:grid-cols-2
                sm:gap-x-8
                sm:gap-y-5
                lg:mt-12
                lg:gap-x-10
                xl:gap-x-16
              "
            >
              {TRUST_POINTS.map((point) => (
                <div
                  key={point}
                  className="
                    flex
                    items-center
                    gap-3
                    font-[Poppins]
                    text-[12px]
                    text-[#000000]
                    sm:text-[13px]
                    md:text-[14px]
                  "
                >
                  <CheckCircle2
                    className="
                      h-[17px]
                      w-[17px]
                      shrink-0
                      text-[#34b233]
                      sm:h-[18px]
                      sm:w-[18px]
                    "
                    strokeWidth={2.5}
                  />

                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}