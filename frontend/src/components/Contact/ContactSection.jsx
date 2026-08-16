import React from "react";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

const ContactSection = () => {
  return (
    <section className="w-full bg-white px-6 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
      <div className="mx-auto grid w-full max-w-[1100px] grid-cols-1 gap-5 md:gap-6 lg:grid-cols-[1.05fr_0.85fr] lg:items-start">
        <ContactForm />
        <ContactDetails />
      </div>
    </section>
  );
};

export default ContactSection;