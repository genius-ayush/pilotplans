import AboutApp from "./components/AboutApp";
import CarouselTripPlan from "./components/CarouselTripPlan";
import DiscoverUniqueThingsToDo from "./components/DiscoverUniqueThingsToDo";
import FeatureStrip from "./components/FeatureStrip";
import FeaturedIn from "./components/FeaturedIn";
import Features from "./components/Features";
import FlyWithOus from "./components/FlyWithOus";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Shop from "./components/Shop";
import Started from "./components/Started";
import Started2 from "./components/Started2";
import StayOrganized from "./components/StayOrganized";
import Testimonials from "./components/Testimonials";
import TravelStories from "./components/TravelStories";
import TripPlan from "./components/TripPlan";
export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TripPlan/>
      <CarouselTripPlan/>
      <FeaturedIn/>
      <AboutApp/>
      <Features/>
      <Testimonials/>
      <StayOrganized/>
      <DiscoverUniqueThingsToDo/>
      <FeatureStrip/>
      <TravelStories/>  
      {/* <Started/> */}
      <Started2/>
      <Shop/>
      <FlyWithOus/>
      <Footer/>
    </div>
  );
}
