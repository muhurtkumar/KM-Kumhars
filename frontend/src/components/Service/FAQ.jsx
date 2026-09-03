import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ_DATA = [
  {
    question: "Do you take projects outside Lucknow?",
    answer:
      "Yes. While most of our work is based in Lucknow and nearby areas, we take on residential and commercial projects across other cities depending on scope. Reach out with your location and we'll confirm feasibility.",
  },
  {
    question: "What's your typical project timeline?",
    answer:
      "Project timelines depend on the size and complexity of the space. After understanding your requirements, we provide a clear timeline covering design, approvals, and execution.",
  },
  {
    question: "Do you only design, or handle execution too?",
    answer:
      "We can handle both design and execution. Our team works closely with clients and trusted professionals to ensure the final space matches the approved design.",
  },
  {
    question: "What's the minimum budget to start a project?",
    answer:
      "The minimum budget depends on the project's size, requirements, materials, and scope. Contact us with your project details and we'll help you understand the expected investment.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F7F6F2] px-4 py-12 sm:px-6 sm:py-14 md:py-16 lg:px-8">
      <div className="mx-auto w-full max-w-[1150px]">

        {/* =====================================================
            SECTION LABEL
            ===================================================== */}
        <p
          className="
            text-center
            font-[Poppins]
            text-[9px]
            font-bold
            uppercase
            tracking-widest
            text-[#8A8C4D]
            sm:text-[10px]
            lg:text-[11px]
          "
        >
          GOT QUESTIONS?
        </p>

        {/* =====================================================
            TITLE
            ===================================================== */}
        <h2
          className="
            mt-3
            text-center
            font-[Poppins]
            text-[22px]
            font-black
            uppercase
            leading-tight
            tracking-wide
            text-[#040500]
            sm:text-[26px]
            md:text-[28px]
            lg:text-[34px]
            xl:text-[38px]
          "
        >
          FREQUENTLY ASKED QUESTIONS
        </h2>

        {/* =====================================================
            FAQ LIST
            ===================================================== */}
        <div className="mt-7 space-y-4 sm:mt-8">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="
                  overflow-hidden
                  border
                  border-[#D9D7D0]
                  bg-white
                "
              >
                {/* Question button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-4
                    px-4
                    py-4
                    text-left
                    sm:px-5
                    sm:py-5
                    lg:px-6
                    lg:py-6
                  "
                >
                  <span
                    className="
                      font-[Poppins]
                      text-[10px]
                      font-medium
                      text-[#000000]
                      sm:text-[11px]
                      md:text-[12px]
                      lg:text-[15px]
                      xl:text-[18px]
                    "
                  >
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`
                      h-4
                      w-4
                      shrink-0
                      text-[#000000]
                      transition-transform
                      duration-300
                      lg:h-5
                      lg:w-5
                      ${isOpen ? "rotate-180" : ""}
                    `}
                    strokeWidth={1.8}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p
                      className="
                        px-4
                        pb-5
                        font-[Poppins]
                        text-[9px]
                        leading-[1.6]
                        text-[#444444]
                        sm:px-5
                        sm:text-[10px]
                        md:text-[11px]
                        lg:px-6
                        lg:text-[13px]
                        xl:text-[16px]
                      "
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM CTA
            ===================================================== */}
        <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <p
            className="
              font-[Poppins]
              text-[12px]
              text-[#777777]
              sm:text-[14px]
              lg:text-[18px]
            "
          >
            Still have questions?
          </p>

          <a
          href="/contact"
          className="
            w-fit
            rounded-[4px]
            bg-[#66643b]
            px-6
            py-2.5
            text-[12px]
            font-semibold
            uppercase
            tracking-wider
            text-white
            transition
            duration-300
            hover:bg-[#54522f]
          "
        >
          SEND MESSAGE
        </a>
        </div>

      </div>
    </section>
  );
}