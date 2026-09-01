import residentialIcon from "../../assets/service/residential.png";
import commercialIcon from "../../assets/service/commercial.png";
import interiorDecorIcon from "../../assets/service/interior-decor.png";
import spacePlanningIcon from "../../assets/service/space-planning.png";
import retailIcon from "../../assets/service/retail.png";
import consultationIcon from "../../assets/service/consultation.png";
import furnitureIcon from "../../assets/service/furniture.png";

const services = [
  {
    number: "01",
    title: "Residential",
    subtitle: "Interiors",
    icon: residentialIcon,
  },
  {
    number: "02",
    title: "Commercial",
    subtitle: "Interiors",
    icon: commercialIcon,
  },
  {
    number: "03",
    title: "Interior Decor",
    subtitle: "& Styling",
    icon: interiorDecorIcon,
  },
  {
    number: "04",
    title: "Space",
    subtitle: "Planning",
    icon: spacePlanningIcon,
  },
  {
    number: "05",
    title: "Retail & Hospitality",
    subtitle: "Design",
    icon: retailIcon,
  },
  {
    number: "06",
    title: "Design",
    subtitle: "Consultation",
    icon: consultationIcon,
  },
  {
    number: "07",
    title: "Custom",
    subtitle: "Furniture Design",
    icon: furnitureIcon,
  },
];

const ServicesList = () => {
  return (
    <section className="relative z-10 -mt-[36px] px-4 sm:-mt-[56px] sm:px-6 lg:-mt-[80px] lg:px-8  font-[Poppins]">
      <div
        className="
          mx-auto
          w-full
          max-w-[1180px]
          rounded-[16px]
          bg-[#f8f7f3]
          px-3
          py-6
          shadow-sm
          sm:px-5
          sm:py-7
          lg:px-2
          lg:py-10
        "
      >
        {/* ================= DESKTOP / LAPTOP ================= */}
        <div className="hidden grid-cols-7 lg:grid">
          {services.map((service, index) => (
            <div
              key={service.number}
              className={`flex min-w-0 flex-col items-center justify-start px-1 text-center xl:px-2 ${
                index !== services.length - 1
                  ? "border-r border-[#858585]"
                  : ""
              }`}
            >
              {/* Number */}
              <span
                className="
                  mb-3
                  text-[18px]
                  font-bold
                  leading-none
                  text-[#66643b]
                  xl:text-[20px]
                "
              >
                {service.number}
              </span>

              {/* Icon */}
              <div
                className="
                  mb-4
                  flex
                  h-[90px]
                  w-[110px]
                  items-center
                  justify-center
                  xl:h-[110px]
                  xl:w-[130px]
                "
              >
                <img
                  src={service.icon}
                  alt={`${service.title} ${service.subtitle}`}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Text */}
              <div
                className="
                  min-h-[40px]
                  text-[13px]
                  font-medium
                  leading-[1.45]
                  text-[#171717]
                  xl:text-[15px]
                "
              >
                <p>{service.title}</p>
                <p>{service.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:hidden">
          {services.map((service, index) => {
            const col = index % 3;
            const isLastFullRowItem = index < 6; // rows 0-1 (indices 0-5) are full rows
            const isFinalOddItem = index === 6; // 7th item, alone in its row

            if (isFinalOddItem) {
              return (
                <div
                  key={service.number}
                  className="col-span-3 grid grid-cols-3"
                >
                  <div className="border-r border-[#858585]" />
                  <div className="flex flex-col items-center justify-start px-2 py-6 text-center">
                    <span className="mb-2 text-[17px] font-bold leading-none text-[#66643b]">
                      {service.number}
                    </span>
                    <div className="mb-3 flex h-[72px] w-[92px] items-center justify-center">
                      <img
                        src={service.icon}
                        alt={`${service.title} ${service.subtitle}`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="text-[13px] font-medium leading-[1.4] text-[#171717]">
                      <p>{service.title}</p>
                      <p>{service.subtitle}</p>
                    </div>
                  </div>
                  <div className="border-l border-[#858585]" />
                </div>
              );
            }

            return (
              <div
                key={service.number}
                className={`flex flex-col items-center justify-start px-2 py-6 text-center ${
                  col !== 2 ? "border-r border-[#858585]" : ""
                } ${isLastFullRowItem ? "border-b border-[#858585]" : ""}`}
              >
                {/* Number */}
                <span className="mb-2 text-[17px] font-extrabold leading-none text-[#66643b]">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-3 flex h-[72px] w-[92px] items-center justify-center">
                  <img
                    src={service.icon}
                    alt={`${service.title} ${service.subtitle}`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="text-[13px] font-medium leading-[1.4] text-[#171717]">
                  <p>{service.title}</p>
                  <p>{service.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* ================= MOBILE ================= */}
        <div className="grid grid-cols-2 sm:hidden">
          {services.map((service, index) => {
            const col = index % 2;
            const isFullRowItem = index < 6; // rows 0-2 (indices 0-5) are full rows
            const isFinalOddItem = index === 6; // 7th item, alone in its row

            if (isFinalOddItem) {
              return (
                <div key={service.number} className="col-span-2 flex justify-center pt-8">
                  <div className="flex w-1/2 flex-col items-center justify-start px-2 text-center">
                    <span className="mb-2 text-[16px] font-extrabold leading-none text-[#66643b]">
                      {service.number}
                    </span>
                    <div className="mb-3 flex h-[64px] w-[80px] items-center justify-center">
                      <img
                        src={service.icon}
                        alt={`${service.title} ${service.subtitle}`}
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="text-[12px] font-medium leading-[1.4] text-[#171717]">
                      <p>{service.title}</p>
                      <p>{service.subtitle}</p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={service.number}
                className={`flex flex-col items-center justify-start px-2 py-6 text-center ${
                  col === 0 ? "border-r border-[#858585]" : ""
                } ${isFullRowItem ? "border-b border-[#858585]" : ""}`}
              >
                {/* Number */}
                <span className="mb-2 text-[16px] font-extrabold leading-none text-[#66643b]">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="mb-3 flex h-[64px] w-[80px] items-center justify-center">
                  <img
                    src={service.icon}
                    alt={`${service.title} ${service.subtitle}`}
                    className="h-full w-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="text-[12px] font-medium leading-[1.4] text-[#171717] tracking-normal">
                  <p>{service.title}</p>
                  <p>{service.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesList;