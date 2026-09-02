import FAQ from "../components/Service/FAQ";
import ServiceDetailList from "../components/Service/ServiceDetailList";
import ServiceHero from "../components/Service/ServiceHero";
import ServiceList from "../components/Service/ServicesList";


const ServicesPage = () => {
  return (
    <main>
      <ServiceHero />
      <ServiceList/>
      <ServiceDetailList/>
      <FAQ/>
    </main>
  );
};

export default ServicesPage;