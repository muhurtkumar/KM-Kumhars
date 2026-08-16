import React, { useRef } from "react";
import { useCountUp } from "react-countup";

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
    <>
      <span ref={countUpRef} />
      <span className="font-sans font-light -mt-2 lg:-mt-4 ml-1">
        {suffix}
      </span>
    </>
  );
};

const stats = [
  {
    title: "PROJECTS<br/>COMPLETED",
    value: "75",
    suffix: "+",
  },
  {
    title: "YEARS<br/>EXPERIENCE",
    value: "4",
    suffix: "+",
  },
  {
    title: "TEAM<br/>MEMBER",
    value: "25",
    suffix: "+",
  },
  {
    title: "HAPPY<br/>CLIENTS",
    value: "50",
    suffix: "+",
  },
];

export default function Stats() {
  return (
    <section className="w-full mb-4 border-y border-black/10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-[1920px] mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className={`
                flex flex-col items-center sm:items-start text-center sm:text-left px-6 xl:px-[53px] py-5 sm:py-6 md:py-7 xl:py-6
                ${index < 3 ? "border-b border-black/10" : ""}
                ${index === 2 ? "sm:border-b-0" : ""}
                lg:border-b-0
                ${index % 2 === 0 ? "sm:border-r border-black/10" : ""}
                ${index < 3 ? "lg:border-r border-black/10" : "lg:border-r-0"}
            `}
          >
            {/* Title */}
            <p
              className="text-[#666666] font-body font-medium text-[14px] xl:text-[15px] leading-[25.92px] uppercase tracking-[0.11em] mb-3"
              dangerouslySetInnerHTML={{ __html: item.title }}
            />

            {/* Olive Line */}
            <div className="w-[59px] h-[2px] bg-[#87864E] mb-6 md:mb-7 xl:mb-8 mx-auto sm:mx-0"></div>

            {/* Number */}
            <div className="flex items-center justify-center sm:justify-start text-[#87864E] font-display font-normal text-[50px] md:text-[60px] xl:text-[75px] leading-[1]">
              <Counter end={parseInt(item.value)} suffix={item.suffix} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};