import serviceHeroImage from "../../assets/service/servicesHero.png";

export default function ServiceHero() {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-[#F7F6F2]"
    >
      {/* Background image */}
      <img
        src={serviceHeroImage}
        alt="Modern interior designed by KM Kumhars Design Studio"
        className="absolute inset-0 h-full w-full object-cover opacity-50 "
      />

      {/* Gradient ONLY behind text */}
      <div className="absolute inset-y-0 left-0 w-[65%] bg-gradient-to-r from-[#F7F6F2]/90 via-[#F7F6F2]/60 to-transparent sm:w-[55%]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[260px] items-center sm:min-h-[300px] md:min-h-[350px] lg:min-h-[444px]">
        <div className="mx-auto w-full max-w-[1395px] px-6 sm:px-8 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-[700px]">
            <h1 className="font-[Poppins] text-[40px] font-black leading-none tracking-wide text-[#293801] sm:text-[45px] md:text-[50px] lg:text-[65px]">
              OUR SERVICES
            </h1>

            <p
              className="mt-4 max-w-[320px] font-[Poppins] text-[14px] font-medium leading-[1.6] text-[#3F3F3F] sm:mt-5 sm:max-w-[340px]
              sm:text-[15px]
              md:max-w-[400px]
              md:text-[16px]
              lg:max-w-[470px]
              lg:text-[17px]"
            >
              We create timeless, functional and beautiful interiors tailored to
              your lifestyle and purpose.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
