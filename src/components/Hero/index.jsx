import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  // }, []);

  useEffect(() => {
    AOS.init();
  }, []);
  const styles = {
    shadowElement: {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
    },
    sacrameto: {
      fontFamily: "Sacramento",
      color: "#f14e95",
    },
    // fadeAnimation: {
    //   transition: "opacity 0.5s ease-in-out",
    //   opacity: isVisible ? 1 : 0,
    // },
  };

  return (
    <section id="hero" className="pb-10">
      <div className="w-full mt-7" data-aos="fade-up">
        <h1 className="name md:text-6xl text-4xl whitespace-nowrap text-center p-5 font-bold mb-4" style={styles.sacrameto}>
          Happy Birthday <br className="md:hidden" />
          Annisa Aulia Adenna
        </h1>
        <p className="text-center px-10">
          Feliz cumpleaños, Joyeux anniversaire, happy birthday, selamat ulang tahun <b>ANNISA AULIA ADENNA</b> , semoga tahun ini menjadi tahun yang lebih baik dari sebelumnya, menjadi tahun yang penuh dengan kebahagiaan, senyuman, dan
          berkah buat kamu, semoga semua impianmu dapat tercapai dengan mudah dan doa-doamu dikabulkan, kuliah dilancarkan, semoga bisa lebih kuat lagi dari sebelumnya, wish u all the best, good luck untuk kedepannya Annisa!!
        </p>
      </div>
    </section>
  );
};

export default Hero;
