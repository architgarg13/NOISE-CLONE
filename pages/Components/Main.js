import Banner from "./Banner";
import Contact from "./Contact";
import Crafted from "./Crafted";
import Footer from "./Footer";
import Menu from "./Menu";
import Navbar from "./Navbar";
import SecondBanner from "./SecondBanner";



function Main() {
  return <div className="container h-[100%] max-w-full">
      <Navbar />
      <div className="  max-w-6xl mx-auto h-[95%] bg-[#fafafa]">
        <Banner />
        <Menu />
        <SecondBanner />
      </div>
      <Contact />
      <Crafted />
      <Footer />
  </div>;
}

export default Main;
