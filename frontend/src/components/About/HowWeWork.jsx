import howWeWorkImage from "../../assets/about/how-we-work.png";

const STEPS = [
  { number: "01", title: "Consultation", description: "We begin by understanding your needs, lifestyle, vision, and budget to create a space that truly reflects you." },
  { number: "02", title: "Planning & Concept Development", description: "Our team develops layout options and design concepts tailored to your preferences, functionality requirements, and aesthetic goals." },
  { number: "03", title: "Design & Visualization", description: "Detailed 3D visualizations, mood boards, and material selections help you clearly envision your future space before execution begins." },
  { number: "04", title: "Estimation & Approval", description: "We provide a transparent quotation, project scope, and timeline, ensuring complete clarity before moving forward." },
  { number: "05", title: "Execution", description: "Our skilled professionals bring the design to life with quality craftsmanship, efficient project management, and attention to detail." },
  { number: "06", title: "Final Delivery", description: "After the finishing touches and styling, we hand over a beautifully completed space that is ready for you to enjoy." },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white pt-12 sm:pt-16 md:pt-20 lg:pt-24 xl:pt-28">
      <div className="mx-auto w-full max-w-[1395px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">

        <p className="font-[Poppins] text-[11px] font-bold uppercase tracking-wide text-[#707070] sm:text-xs">
          HOW WE WORK
        </p>

        <div className="mt-5 xl:grid xl:grid-cols-[minmax(0,1fr)_500px] xl:items-start xl:gap-14">

          <div>
            <h2 className="font-[Poppins] text-[30px] font-black uppercase leading-[1.2] tracking-wide text-[#211F1F] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[46px]">
              HOW WE BRING YOUR STORY
              <br />
              INTO SPACE
            </h2>

            <div className="mt-8 overflow-hidden xl:hidden">
              <img
                src={howWeWorkImage}
                alt="Modern interior space designed by KM Kumhars Design Studio"
                className="h-[280px] w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.04] sm:h-[340px] md:h-[450px]"
              />
            </div>

            <div className="mt-8 xl:mt-15">
              {STEPS.map((step) => (
                <div key={step.number} className="border-b border-[#D7D3B8] py-4 first:pt-0 sm:py-5">
                  <div className="flex items-baseline gap-2">
                    <span className="font-[Poppins] text-[22px] font-bold leading-none text-[#48621e] sm:text-[28px]">
                      {step.number}
                    </span>
                    <h3 className="font-[Poppins] text-[22px] font-bold leading-tight text-[#161616] sm:text-[28px]">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 max-w-[700px] font-[Poppins] text-[13px] leading-[1.6] text-[#444444] sm:text-[14px] md:text-[15px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden overflow-hidden xl:block">
            <img
              src={howWeWorkImage}
              alt="Modern interior space designed by KM Kumhars Design Studio"
              className="h-full min-h-[1030px] w-full object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.04]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}