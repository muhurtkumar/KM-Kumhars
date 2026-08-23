import ResidentialImage from "../../assets/Hero/ResidentialInteriors.png";   
import CommercialImage from "../../assets/Hero/CommercialInteriors.png";   
import InteriorDecorImage from "../../assets/Hero/InteriorStyling.png";   
import SpacePlanningImage from "../../assets/Hero/SpacePlanning.png";   
import DesignConsultationImage from "../../assets/Hero/DesignConsultation.png";   
import RetailDesignImage from "../../assets/Hero/RetailDesign.png";   
import FurnitureDesignImage from "../../assets/Hero/FurnitureDesign.png";   
import { ArrowRight } from "lucide-react";
import MarqueeImport from "react-fast-marquee";

const Marquee = MarqueeImport.default || MarqueeImport;
   
const services = [   
  {   
    title: "Residential Interiors",   
    description: "Elegant and functional homes designed around your lifestyle, personality, and comfort.",   
    image: ResidentialImage,   
  },   
  {   
    title: "Commercial Interiors",   
    description: "Innovative workspaces that enhance productivity and showcase your brand identity.",   
    image: CommercialImage,   
  },     
  {   
    title: "Space Planning",   
    description: "Creating balanced layouts that combine aesthetics, functionality and efficient space utilization.",   
    image: SpacePlanningImage,   
  },   
  {   
    title: "Design Consultation",   
    description: "Personalized consultations that help you make confident design decisions from the start.",   
    image: DesignConsultationImage,   
  }, 
  {   
    title: "Interior Decor",   
    description: "Elegant décor solutions that transform interiors into stylish and inviting living spaces.",   
    image: InteriorDecorImage,   
  },   
  {   
    title: "Retail Design",   
    description: "Creating inviting spaces that elevate customer experiences and strengthen your brand identity.",   
    image: RetailDesignImage,   
  },   
  {   
    title: "Furniture Design",   
    description: "Bespoke furniture designed to perfectly complement your space, style, and functionality.",   
    image: FurnitureDesignImage,   
  },   
];   
   
export default function OurServices() {   
  return (   
    <section className="w-full overflow-hidden py-3 font-[Poppins] sm:py-6 md:py-8">   
      {/* Header */}   
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">   
        <p className="text-[15px] font-black uppercase tracking-[0.18em] text-[#757575]">   
          Our Services   
        </p>   
   
        <h2 className="mt-3 text-[25px] font-black uppercase uppercase leading-tight tracking-[0.05em] text-[#1B1B1B] md:text-[38px] lg:text-[35px]">   
          Design Solutions For Every Space   
        </h2>   
   
        <p className="mt-3 max-w-[1050px] text-[14px] leading-6 text-[#777] md:text-[16px] lg:text-[17px]">   
          From concept to completion, we create thoughtfully designed spaces   
          tailored to your lifestyle, business, and vision.   
        </p>   
      </div>   
   
      {/* Service Cards */}   
      <div className="mt-8 md:mt-10 cursor-pointer"> 
        <Marquee 
          speed={65} 
          pauseOnHover={true} 
          gradient={false} 
        > 
          <div className="flex gap-4 px-2"> 
            {services.map((service) => (   
              <div   
                key={service.title}   
                className="group relative h-[260px] w-[230px] shrink-0 overflow-hidden rounded-[14px] sm:h-[300px] sm:w-[310px] md:h-[330px] md:w-[310px] lg:h-[350px] lg:w-[430px]"   
              >   
                {/* Background Image */}   
                <img   
                  src={service.image}   
                  alt={service.title}   
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"   
                />   
   
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />   
   
                {/* Content */}   
                <div className="absolute inset-x-0 bottom-0 p-5 md:p-6">   
                  <h3 className="text-[16px] font-bold italic leading-tight text-white sm:text-[20px] md:text-[22px]">
                    {service.title}   
                  </h3>   
   
                  <p className="mt-2 max-w-[260px] text-[10px] leading-5 text-white/85 md:text-[13px]">   
                    {service.description}   
                  </p>   
   
                  {/* Explore Service */}  
                  <div className="mt-2 flex items-center gap-3">  
                    <span className="text-[12px] font-medium uppercase tracking-[0.08em] text-white">  
                      Explore Service  
                    </span>  
   
                    <div className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/60 text-[14px] text-white transition-transform duration-300 group-hover:translate-x-1">   
                      <ArrowRight size={14} strokeWidth={1.8} />   
                    </div>  
                  </div>  
                </div>   
              </div>   
            ))}   
          </div> 
        </Marquee> 
      </div> 
    </section>   
  );   
}