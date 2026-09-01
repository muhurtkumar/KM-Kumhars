import { ArrowRight, FileText } from "lucide-react";

import ConsultationIcon from "../../assets/Hero/ConsultationIcon.png";
import PlanningIcon from "../../assets/Hero/PlanningIcon.png";
import DesigningIcon from "../../assets/Hero/DesigningIcon.png";
import EstimationIcon from "../../assets/Hero/EstimationIcon.png";
import ExecutionIcon from "../../assets/Hero/ExecutionIcon.png";
import DeliveryIcon from "../../assets/Hero/DeliveryIcon.png";

const steps = [
  {
    number: "01",
    title: "Consultation",
    icon: ConsultationIcon,
  },
  {
    number: "02",
    title: "Planning",
    icon: PlanningIcon,
  },
  {
    number: "03",
    title: "Designing",
    icon: DesigningIcon,
  },
  {
    number: "04",
    title: "Estimation",
    icon: EstimationIcon,
  },
  {
    number: "05",
    title: "Execution",
    icon: ExecutionIcon,
  },
  {
    number: "06",
    title: "Delivery",
    icon: DeliveryIcon,
  },
];

export default function WorkingProcess() {
  return (
    <section className="w-full bg-white py-12">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Header */}
        <div>
          <p className="text-[15px] font-black uppercase tracking-[0.18em] text-[#757575] font-[Poppins]">
            How We Work
          </p>

          <h2 className="mt-3 font-[Poppins] text-[25px] font-black uppercase leading-tight tracking-[0.03em] text-[#1b1717] sm:text-[38px] lg:whitespace-nowrap lg:text-[35px]">
            A Seamless Journey From Vision To Reality
          </h2>

          <p className="mt-3 max-w-[1100px] text-[13px] leading-6 text-[#777] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[Poppins]">
            From first conversation to final walkthrough, every project follows a clear path built on collaboration, precision, and care for detail.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mt-7 md:mt-12">

          {/* Connecting Line - Desktop */}
          <div className="absolute left-[8%] right-[8%] top-[13px] hidden h-[1px] bg-[#87864E]/50 lg:block"></div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6 lg:gap-0">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="relative flex items-center gap-5 lg:flex-col lg:items-center lg:gap-0"
                >
                  {/* Numbering */}
                  <div className="flex shrink-0 flex-row items-center gap-3 lg:flex-col lg:items-center lg:gap-0">

                    {/* Number */}
                    <span className="order-1 mb-0 text-[20px] font-black leading-none  text-[#87864E] lg:order-1 lg:mb-4 lg:text-[24px]">
                      {step.number}
                    </span>

                    {/* Icon */}
                    <div className="order-2 relative z-10 flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#87864E] text-white lg:order-2 md:h-[50px] md:w-[50px] lg:h-[55px] lg:w-[55px]">
                      <img
                        src={Icon}
                        alt={step.title}
                        className={`h-[35px] w-[35px] lg:h-[48px] lg:w-[48px] object-contain ${
                          step.number === "06" ? "scale-125" :
                          step.number === "04" ? "scale-90" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-[15px] font-bold text-[#191919] lg:mt-5 lg:text-center lg:text-[18px] font-[Poppins]">
                    {step.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
        {/* Bottom Information Card */} 
        <div className="mt-12 grid items-center gap-8 rounded-[12px] bg-[#F5F4F0] px-6 py-7 md:grid-cols-2 md:px-8 lg:grid-cols-[1fr_1fr_auto] lg:px-10 lg:py-10"> 
        
          {/* Left */} 
          <div className="flex items-center gap-5"> 
            <div className="flex h-[50px] w-[50px] md:h-[68px] md:w-[68px] shrink-0 items-center justify-center rounded-full border border-[#191919] text-[#87864E]"> 
              <FileText size={32} md:size={37} strokeWidth={1.5} /> 
            </div> 
        
            <div className="font-serif text-[14px] italic leading-7 text-[#191919] md:text-[17px]"> 
              <p className="font-bold"> 
                A thoughtful process. 
              </p> 
        
              <p className="font-bold"> 
                Beautiful spaces. 
              </p> 
            </div> 
          </div> 
        
          {/* Middle */} 
          <div className="flex flex-col gap-6 border-l-0 pl-0 text-[13px] italic leading-6 text-[#191919] md:border-l md:border-[#999] md:pl-8 md:text-[14px] lg:h-[80px] lg:flex-row lg:items-center lg:gap-8 lg:border-l lg:border-[#999] lg:pl-8"> 
            
            {/* Paragraph */} 
            <div> 
              From concept to completion, we're 
              <br className="hidden md:block" /> 
              with you at every step of the journey 
            </div> 

            {/* CTA - Medium */} 
            <div className="md:block lg:hidden"> 
              <a 
                href="#process" 
                className="group inline-flex items-center gap-3 text-[14px] font-bold not-italic uppercase tracking-[0.04em] text-[#191919]" 
              > 
                <span className="border-b border-[#191919] pb-1"> 
                  View All Steps 
                </span> 
        
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        
          {/* CTA - Large */}
          <div className="hidden lg:block">
            <a
              href="#process"
              className="group inline-flex items-center gap-3 text-[14px] font-bold uppercase tracking-[0.04em] text-[#191919]"
            >
              <span className="border-b border-[#191919] pb-1">
                View All Steps
              </span>
        
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}