import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { imagebar, monster, image1, image2, image3, image4, image5, image6, image7 } from "../../assets/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Data gambar
  const galleryImages = [image1, image2, image3, image4, image5, image6, image7];

  // Fungsi untuk membuka lightbox
  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  // Fungsi untuk menutup lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    setLightboxOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("gallery-section");
      if (!isVisible && element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const style = {
    sacrameto: {
      fontFamily: "Sacramento",
      color: "#f14e95",
    },
  };

  return (
    <section className="container " id="gallery" data-aos="fade-up" data-aos-duration="1000">
      <h1 className="md:text-6xl text-4xl whitespace-nowrap text-center p-5 font-bold mb-4" style={style.sacrameto}>
        Gallerymu &hearts;
      </h1>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="order-2 md:order-1 w-full md:w-1/2">
          <Slider {...settings}>
            <div>
              <img src={monster} alt="Carousel Image" className="w-full" />
            </div>
            <div>
              <img src={imagebar} alt="Carousel Image" className="w-full" />
            </div>
          </Slider>
        </div>
        {/* Teks */}
        <div className="order-1 md:order-2 w-full md:w-1/2 md:ml-10">
          <h2 className="text-center md:text-left text-2xl font-bold mb-4">Foto paling Fav &hearts;</h2>
          <p className="text-center mb-3 md:text-left">Slide Slide Slide</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a1a1aa"
          fill-opacity="1"
          d="M0,160L48,170.7C96,181,192,203,288,213.3C384,224,480,224,576,197.3C672,171,768,117,864,128C960,139,1056,213,1152,240C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Gallery;
