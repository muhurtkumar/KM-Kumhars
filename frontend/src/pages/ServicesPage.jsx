import StartProject from "../components/Service/CtaDining";
import FAQs from "../components/Service/FAQ";
import OurPhilosophy from "../components/Service/OurPhilosophy";
import ServiceDetailList from "../components/Service/ServiceDetailList";
import ServiceHero from "../components/Service/ServiceHero";
import ServiceList from "../components/Service/ServicesList";


const ServicesPage = () => {
  return (
    <main>
      <ServiceHero />
      <ServiceList/>
      <ServiceDetailList/>
      <OurPhilosophy/>
      <FAQs/>
      <StartProject/>
    </main>
  );
};

export default ServicesPage;