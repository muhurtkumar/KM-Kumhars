import { CheckCircle2 } from "lucide-react";

import residentialImg from "../../assets/service/residentialImg.png";
import commercialImg from "../../assets/service/commercialImg.png";
import interiorDecorImg from "../../assets/service/interiorDecorImg.png";
import spacePlanningImg from "../../assets/service/spacePlanningImg.png";
import retailImg from "../../assets/service/retailImg.png";
import consultationImg from "../../assets/service/consultationImg.png";
import furnitureImg from "../../assets/service/furnitureImg.png";

const services = [
  {
    number: "01",
    title: "Residential Interiors",
    description:
      "We transform residential spaces into elegant, functional, and personalized homes with thoughtful layouts, premium finishes, and timeless interiors designed around your lifestyle.",
    features: [
      "Living and Dining Spaces",
      "Bedrooms and Wardrobes",
      "Modular Kitchens",
      "Turnkey Solutions",
    ],
    image: residentialImg,
  },
  {
    number: "02",
    title: "Commercial Interiors",
    description:
      "We craft functional and inspiring commercial interiors that reflect your brand identity while creating efficient, comfortable, and professional environments for businesses of every scale.",
    features: [
      "Office Spaces",
      "Workstations and Cabins",
      "Reception and Lounge",
      "Turnkey Commercial Interiors",
    ],
    image: commercialImg,
  },
  {
    number: "03",
    title: "Interior Decor & Styling",
    description:
      "From carefully selected décor and furnishings to lighting, artwork, and accessories, we style every space with thoughtful details that enhance its beauty, comfort, and personality.",
    features: [
      "Home Styling",
      "Seasonal Decor",
      "Art Curating",
      "Space Refresh",
    ],
    image: interiorDecorImg,
  },
  {
    number: "04",
    title: "Space Planning",
    description:
      "We optimize every inch of your space with thoughtful layouts that enhance functionality, improve circulation, and create a perfect balance of comfort, efficiency, and design.",
    features: [
      "2D Layout Planning",
      "Space Optimization",
      "Furniture Layout",
      "Lighting and Electrical Planning",
    ],
    image: spacePlanningImg,
  },
  {
    number: "05",
    title: "Retail Design",
    description:
      "We create retail and hospitality interiors that combine functionality, aesthetics, and brand identity to deliver memorable customer experiences and welcoming environments.",
    features: [
      "Retail Stores & Showrooms",
      "Restaurants & Cafes",
      "Salons & Spas",
      "Hotels & Hospitality Spaces",
    ],
    image: retailImg,
  },
  {
    number: "06",
    title: "Design Consultation",
    description:
      "Our design consultation service helps you make informed decisions with personalized guidance on layouts, materials, colors, furniture, and overall design—ensuring your space is both functional and visually refined.",
    features: [
      "One on One Consultation",
      "Concept Development",
      "Material & Color Guidance",
      "Budget Planning",
    ],
    image: consultationImg,
  },
  {
    number: "07",
    title: "Custom Furniture Design",
    description:
      "We create bespoke furniture that blends functionality, craftsmanship, and timeless aesthetics. Every piece is thoughtfully designed to complement interiors while meeting your unique lifestyle and space requirements.",
    features: [
      "TV Units & Entertainment Consoles",
      "Material & Finish Selection",
      "Dining Tables & Coffee Tables",
      "Art & Accessories Styling",
    ],
    image: furnitureImg,
  },
];

const ServiceRow = ({ service, reverse }) => {
  return (
    <div
      className={`
        flex flex-col overflow-hidden rounded-[12px] bg-[#f8f7f3]
        lg:flex-row lg:items-stretch
        ${reverse ? "lg:flex-row-reverse" : ""}
      `}
    >
      {/* Image */}
      <div className="h-[240px] w-full sm:h-[320px] lg:h-auto lg:w-1/2">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex w-full flex-col justify-center px-6 py-8 sm:px-10 sm:py-10 lg:w-1/2 lg:px-12">
        {/* Number inline with title*/}
        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[22px] font-bold leading-tight text-[#66643b] sm:text-[26px] lg:text-[28px]">
            {service.number}
          </span>
          <h3 className="text-[20px] font-bold uppercase leading-tight text-[#171717] sm:text-[24px] lg:text-[26px]">
            {service.title}
          </h3>
        </div>

        <p className="mb-5 text-justify text-[14px] leading-[1.7] text-[#5b5b57] [text-align-last:left] sm:text-[15px]">
          {service.description}
        </p>

        <ul className="mb-6 flex flex-col gap-2.5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2.5 text-[14px] text-[#5b5b57] sm:text-[15px]"
            >
              <CheckCircle2 className="h-[18px] w-[18px] shrink-0 text-[#5c8a3a]" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

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
            transition-colors
            hover:bg-[#54522f]
          "
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

const ServiceDetailList = () => {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20  font-[Poppins]">
      <div className="mx-auto w-full max-w-[1180px]">
        {/* Section heading */}
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <span className="mb-3 block text-[13px] font-bold uppercase tracking-[0.15em] text-[#66643b] sm:text-[14px]">
            What We Offer
          </span>
          <h2 className="font-serif text-[36px] font-bold leading-tight text-[#171717] sm:text-[46px] lg:text-[52px]">
            Our Design Services
          </h2>
          <div className="mt-5 h-px w-[110px] bg-[#171717]/40" />
        </div>

        <div className="flex flex-col gap-6 sm:gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceRow
              key={service.number}
              service={service}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailList;