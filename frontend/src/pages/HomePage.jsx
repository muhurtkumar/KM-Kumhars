import Hero from "../components/Home/Hero";
import AboutSection from "../components/Home/AboutSection";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import Stats from "../components/Home/Stats";
import WorkingProcess from "../components/Home/WorkingProcess";

const Home = () => {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Stats />
      <WorkingProcess />
      <WhyChooseUs />
    </main>
  );
};

export default Home;