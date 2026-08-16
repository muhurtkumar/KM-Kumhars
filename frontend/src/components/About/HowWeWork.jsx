import howWeWorkImage from "../../assets/about/how-we-work.png";

const STEPS = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We begin by understanding your needs, lifestyle, vision, and budget to create a space that truly reflects you.",
  },
  {
    number: "02",
    title: "Planning & Concept Development",
    description:
      "Our team develops layout options and design concepts tailored to your preferences, functionality requirements, and aesthetic goals.",
  },
  {
    number: "03",
    title: "Design & Visualization",
    description:
      "Detailed 3D visualizations, mood boards, and material selections help you clearly envision your future space before execution begins.",
  },
  {
    number: "04",
    title: "Estimation & Approval",
    description:
      "We provide a transparent quotation, project scope, and timeline, ensuring complete clarity before moving forward.",
  },
  {
    number: "05",
    title: "Execution",
    description:
      "Our skilled professionals bring the design to life with quality craftsmanship, efficient project management, and attention to detail.",
  },
  {
    number: "06",
    title: "Final Delivery",
    description:
      "After the finishing touches and styling, we hand over a beautifully completed space that is ready for you to enjoy.",
  },
];

export default function HowWeWork() {
  return (
    <section className="w-full bg-white py-12 sm:py-16 lg:py-8">
      {/* Main container */}
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-0">

        {/* Small section label */}
        <p className="font-[Poppins] text-[px] font-bold uppercase tracking-wide text-[#666666]">
          HOW WE WORK
        </p>

        {/* 
          Large screens:
          Heading and image share the same top position.

          Small screens:
          Heading comes first, followed immediately by the image.
        */}
        <div className="mt-5 xl:grid xl:grid-cols-[minmax(0,1fr)_500px] xl:items-start xl:gap-14">

          {/* LEFT SIDE */}
          <div>
            {/* Main heading */}
            <h2 className="font-[Poppins] text-[40px] font-black uppercase leading-[1.2] tracking-wide text-[#211F1F] sm:text-[34px] md:text-[38px] xl:text-[40px]">
              HOW WE BRING YOUR STORY
              <br />
              INTO SPACE
            </h2>

            {/* 
              On smaller screens the image appears immediately
              after the main heading.
              
              On large screens the image is positioned separately
              beside the heading + process content.
            */}
            <div className="mt-8 xl:hidden">
              <img
                src={howWeWorkImage}
                alt="Modern interior space designed by KM Kumhars Design Studio"
                className="h-[280px] w-full object-cover object-center sm:h-[340px] md:h-[450px]"
              />
            </div>

            {/* Process steps */}
            <div className="mt-8 xl:mt-15">
              {STEPS.map((step) => (
                <div
                  key={step.number}
                  className="border-b border-[#D7D3B8] py-4 first:pt-0 sm:py-5"
                >
                  {/* Step title */}
                  <div className="flex items-baseline gap-2">
                    <span className="font-[Poppins] text-[22px] font-bold leading-none text-[#48621e] sm:text-[28px]">
                      {step.number}
                    </span>

                    <h3 className="font-[Poppins] text-[22px] font-bold leading-tight text-[#161616] sm:text-[28px]">
                      {step.title}
                    </h3>
                  </div>

                  {/* Step description */}
                  <p className="mt-4 max-w-[700px] font-[Poppins] text-[12px] leading-[1.5] text-[#444444] sm:text-[14px]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 
            LARGE SCREEN IMAGE

            It starts at exactly the same vertical position
            as the main heading and stretches alongside the
            complete process content.
          */}
          <div className="hidden xl:block">
            <img
              src={howWeWorkImage}
              alt="Modern interior space designed by KM Kumhars Design Studio"
              className="h-full min-h-[850px] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}