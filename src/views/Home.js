import { React, useEffect, useState } from "react";
import "../App.css";
import Footer from "../components/Footer/Footer";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer.js";
import DawnImage from "../assets/dawn_img.png";
import DawnImageWeb from "../assets/dawn_img_web.png";
import ChrysalisWeb from "../assets/chrysalis_web.png";
import Image from "../components/ImageContainer/Image";
import Description from "../components/Description/Description";
import ThemeVideo from "../components/ThemeVideo/ThemeVideo";
import Chrysalis from "../components/Chrysalis/Chrysalis";

function Home() {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 767;

  return (
    <>
      <BackgroundContainer />
      <Description heading="About" content="lorem30" />
      <Image location={isMobile ? DawnImage : DawnImageWeb} />
      <Description heading="Theme" content="lorem30" />
      {isMobile ? (
        <div className="celesta-text">
          <div className="celesta-glow-container">
            <h3 className="celesta-glow glow1">celesta</h3>
            <h3 className="celesta-glow glow2">celesta</h3>
            <h3 className="celesta-glow glow3">celesta</h3>
            <h3 className="celesta-glow glow4">celesta</h3>
          </div>
          <h2 className="celesta celesta-cut">Celesta</h2>
        </div>
      ) : (
        <Image location={ChrysalisWeb} />
      )}
      <ThemeVideo />
      {/* <div className="celesta-text">
        <span className="celesta-top">Chrysalis____Dawn</span>
        <h2 className="celesta celesta-dawn">Celesta</h2>
      </div> */}
      <Chrysalis isMobile={isMobile} />
      <Footer />
    </>
  );
}

export default Home;
