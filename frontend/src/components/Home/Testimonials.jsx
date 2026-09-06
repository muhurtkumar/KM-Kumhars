import { useEffect, useState } from "react";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      review:
        "Working with KM Kumhars was effortless from start to finish. They understood our vision instantly and turned our home into a space that feels warm, refined, and truly ours.",
      name: "John De",
      designation: "Art Director",
      rating: 4,
    },
    {
      review:
        "The entire experience was smooth and professional. The team understood exactly what we wanted and transformed our space into something beautiful, functional, and timeless.",
      name: "Sarah Lee",
      designation: "Creative Director",
      rating: 5,
    },
    {
      review:
        "From the initial concept to the final details, everything was handled with great care. Our home now feels sophisticated, comfortable, and completely personal.",
      name: "Michael Roy",
      designation: "Business Owner",
      rating: 3,
    },
    {
      review:
        "KM Kumhars brought our ideas to life better than we could have imagined. Every detail was thoughtfully designed and the final result exceeded our expectations.",
      name: "Emma Wilson",
      designation: "Interior Consultant",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="w-full bg-white font-[Poppins]">
      <style>
        {`
          @keyframes testimonialSlideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }

          .testimonial-slide-in {
            animation: testimonialSlideIn 0.7s ease-out;
          }
        `}
      </style>

      <div className="mx-auto max-w-[1400px] px-6 py-12 sm:px-8 md:px-10 lg:px-[40px] lg:py-[60px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[48%_52%] lg:gap-0">

          {/* Left Content */}
          <div className="flex flex-col justify-center lg:pr-[60px]">
            <p className="text-[15px] font-black uppercase tracking-[0.18em] text-[#757575] font-[Poppins]">
                Clients Feedback
            </p>

            <h2 className="max-w-[1060px] mt-4 text-[25px] font-black uppercase leading-[1.45] tracking-[0.04em] text-[#191717] sm:text-[38px] lg:text-[35px] font-[Poppins]">
              Our Testimonial From Best Clients
            </h2>

            <p className="mt-4 max-w-[520px] text-[13px] leading-[1.65] text-[#707070] sm:text-[14px] md:text-[15px] lg:text-[16px] font-[Poppins]">
              We build every relationship on trust, clear communication, and a
              shared commitment to getting the details right. Here's what our
              clients have to say about working with us.
            </p>
          </div>

          {/* Testimonial Card */}
          <div className="overflow-hidden border border-[#dedede] bg-white px-5 py-5 sm:px-7 sm:py-6 min-[1200px]:min-h-[207px] lg:px-5 lg:py-5 xl:px-7 xl:py-6">

            {/* Animated Testimonial Content */}
            <div key={currentIndex} className="testimonial-slide-in">

              {/* Stars */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={17}
                    strokeWidth={2}
                    className={
                      star <= currentTestimonial.rating
                        ? "fill-[#454545] text-[#454545]"
                        : "text-[#454545]"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 max-w-[1060px] text-[13px] leading-[1.45] text-[#6f6f6f] sm:text-[14px] font-[Poppins]">
                {currentTestimonial.review}
              </p>

              {/* Client */}
              <div className="mt-6 flex items-center gap-4 font-[Poppins]">

                {/* Avatar */}
                <div className="h-[59px] w-[59px] shrink-0 rounded-full bg-[#f5f4f0]" />

                {/* Name + Position */}
                <div>
                  <p className="text-[12px] font-black uppercase tracking-[0.04em] text-[#292727] sm:text-[13px]">
                    {currentTestimonial.name}
                  </p>

                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#666666]">
                    {currentTestimonial.designation}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}