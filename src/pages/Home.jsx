import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import TopProducts from "../components/sections/TopProducts";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TopProducts />
      </main>
    </>
  );
};

export default Home;