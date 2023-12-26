import AboutListSection from "./pages/home/aboutListSection";
import AboutUsSection from "./pages/home/aboutUsSection";
import ContactUs from "./pages/home/contactUs";
import CountsSection from "./pages/home/countsSection";
import EndCountsSection from "./pages/home/endCountsSection";
import ImageSlider from "./pages/home/imageSlider";
import NewsLetter from "./pages/home/newsLetter";
import ServiceSection from "./pages/home/serviceSection";
import about from "./images/home/servicesection/about.jpg";

function App() {
  const aboutSection = {
    heading: "About Us",
    content:
      "Myinception is one of the fastest growing placement services and software development firm in India. Our headoffice is located in Chennai, we extend our services to different industries in India.We have qualified and experienced team members,weunderstands the clientrequirementsand help them to identify the right candidates who fit their requirements. Our extensive database of job seekers enables us to identify the right candidate within a very short span of time and serve our clients at the right time.",
    image: about,
    marquee1: "IT Company Job In Bangalore Date:13.5.2015 APPLY",
    marquee2: "Civil Job In Chennai Date:13.5.2015 APPLY",
  };

  const EndAboutSection = {
    heading: "What We Do",
    content:
      "MyInception has started in the year 2009 at Chennai. We are a placement Consultants by a Group of Dynamic Professionals with rich experience in Mechanical Manufacturing Industry, Automotive/Energy Industries, Computer Hardware and Software Clients.We have tie-ups with reputed organization in the verticals of Automobiles, Construction, Engineering, Manufacturing, Media, Entertainment, Infrastructure, Pharma, Biotech, Clinical Research, Telecom & Mechanical.We have a good track record in conducting Campus Placements and Training, We have well trained HR team having rich experience in organizing and executing the Campus Placements & Job Fairs across India.Looking to have a mutual beneficial relationship with your institution.",
    image: about,
  };

  return (
    <div className="App">
      <ImageSlider />
      <ServiceSection />
      <AboutUsSection aboutSection={aboutSection} />
      <AboutListSection />
      <CountsSection />
      <AboutUsSection aboutSection={EndAboutSection} />
      <EndCountsSection />
      <NewsLetter />
      <ContactUs />
    </div>
  );
}

export default App;
