import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TopProducts from "../components/sections/TopProducts";
import OfferBanner from "../components/sections/OfferBanner";

const Home = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TopProducts />
        <OfferBanner />
      </main>
    </>
  );
};

export default Home;