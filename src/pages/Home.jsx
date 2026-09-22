import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import TopProducts from "../components/sections/TopProducts";
import OfferBanner from "../components/sections/OfferBanner";
import ExploreMore from "../components/sections/ExploreMore";
import AboutUs from "../components/sections/AboutUs";
import FeaturedTreats from "../components/sections/FeaturedTreats";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TopProducts />
        <OfferBanner />
        <ExploreMore />
        <AboutUs />
        <FeaturedTreats />
      </main>

      <Footer />
    </>
  );
};

export default Home;