import React, { useRef } from "react";
import StatsBackground from "../../assets/Hero/stats-bg.png";
import { useCountUp } from "react-countup";
import { House, CalendarDays, Users, Heart } from "lucide-react";

/* =========================================================
   COUNT-UP COMPONENT
   Keeps the existing animated number behaviour
========================================================= */
const Counter = ({ end, suffix }) => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    end: end,
    duration: 2.5,
    enableScrollSpy: true,
    scrollSpyOnce: true,
  });

  return (
    <div className="flex items-center">
      <span ref={countUpRef} />

      <span className="ml-1 -mt-2 font-sans font-light lg:-mt-4">{suffix}</span>
    </div>
  );
};

/* =========================================================
   STATS DATA
========================================================= */
const stats = [
  {
    title: "PROJECTS<br/>COMPLETED",
    value: "75",
    suffix: "+",
    icon: House,
  },
  {
    title: "YEARS<br/>EXPERIENCE",
    value: "4",
    suffix: "+",
    icon: CalendarDays,
  },
  {
    title: "TEAM<br/>MEMBER",
    value: "25",
    suffix: "+",
    icon: Users,
  },
  {
    title: "HAPPY<br/>CLIENTS",
    value: "50",
    suffix: "+",
    icon: Heart,
  },
];

/* =========================================================
   STATS SECTION
========================================================= */
export default function Stats() {
  return (
    <section className="w-full mb-4">
      {/* Background image is limited to the stats rectangle */}
    <div
  className="
    relative
    w-full
    overflow-hidden
    border-y
    border-white/20
    bg-[#263900]
    font-[Poppins]
  "
>
  {/* Background image */}
  <img
    src={StatsBackground}
    alt=""
    aria-hidden="true"
    className="
      absolute
      inset-0
      h-full
      w-full
      object-cover
      opacity-60
    "
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/30" />

  {/* Stats grid */}
  <div
    className="
      relative
      mx-auto
      grid
      max-w-[1920px]
      grid-cols-1
      sm:grid-cols-2
      lg:grid-cols-4
    "
  >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={`
                  relative
                  flex
                  flex-col
                  items-center
                  px-6
                  py-8
                  text-center
                  sm:items-start
                  sm:px-8
                  sm:py-9
                  sm:text-left
                  xl:px-[53px]
                  xl:py-10

                  /* Horizontal dividers on mobile/tablet */
                  ${index < 3 ? "border-b border-white/20" : ""}

                  /* Remove divider below third item at tablet */
                  ${index === 2 ? "sm:border-b-0" : ""}

                  /* Remove all bottom borders on desktop */
                  lg:border-b-0

                  /* Vertical dividers */
                  ${index % 2 === 0 ? "sm:border-r sm:border-white/20" : ""}

                  /* Desktop vertical dividers */
                  ${
                    index < 3
                      ? "lg:border-r lg:border-white/20"
                      : "lg:border-r-0"
                  }
                `}
              >
                {/* Icon */}
                <div
                  className="
                    mb-4
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/50
                    text-[#E8E6C8]
                    transition-all
                    duration-300
                    hover:border-[#87864E]
                    hover:bg-[#87864E]/20
                  "
                >
                  <Icon size={20} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <p
                  className="
                    mb-3
                    font-body
                    text-[13px]
                    font-medium
                    leading-[1.8]
                    tracking-[0.11em]
                    text-white/90
                    xl:text-[15px]
                  "
                  dangerouslySetInnerHTML={{
                    __html: item.title,
                  }}
                />

                {/* Olive accent line */}
                <div
                  className="
                    mb-5
                    h-[2px]
                    w-[59px]
                    bg-[#B2AF69]
                    sm:mb-6
                    xl:mb-7
                  "
                />

                {/* Number */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    font-display
                    text-[52px]
                    font-normal
                    leading-none
                    text-[#F1EFD6]
                    sm:justify-start
                    md:text-[62px]
                    xl:text-[75px]
                  "
                >
                  <Counter end={parseInt(item.value)} suffix={item.suffix} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
