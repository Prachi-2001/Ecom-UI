import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  {
    src: "https://cdn.faire.com/fastly/990565ba2b650a2f1f508bdbe70491ba3638d9ccf5e4fc9a6609a6f8dbf69f10.jpeg?dpr=1.5&fit=crop&format=jpg&height=450&width=360",
    alt: "Shop beauty & wellness",
  },
  {
    src: "https://cdn.faire.com/fastly/d12fd27df0ffc01e76a9a329b67bc9333f0244abb4b5d6c860a603841c76d5fb.jpeg?dpr=1.5&fit=crop&format=jpg&height=450&width=360",
    alt: "Shop jewelry",
  },
  {
    src: "https://cdn.faire.com/fastly/c0510d4a93f4ff78f090e96c8043b435af8a3a7368c2a6213ecd4980e2166e5b.jpeg?dpr=1.5&fit=crop&format=jpg&height=450&width=360",
    alt: "Shop food & drink",
  },
  {
    src: "https://cdn.faire.com/fastly/749ffe09238499ddd51da5399555e1a3e14c757e1b06e3829306ae36dbb1df2d.jpeg?dpr=1.5&fit=crop&format=jpg&height=450&width=360",
    alt: "Eco-Friendly brands",
  },
  {
    src: "https://cdn.faire.com/fastly/673e3e2396ebe861807a27891f1354e5993cbe9e9d473cd8e0e31a5b9677c8cb.jpeg?dpr=1.5&fit=crop&format=jpg&height=450&width=360",
    alt: "Nicht auf Amazon erhältliche Marken",
  },
  {
    src: "https://cdn.faire.com/fastly/15cf08198a86dba2e5f9a0ad13729203d5cdfb14d19f3440bda5b045c0c5ef46.jpeg?dpr=1.5&fit=crop&format=jpg&height=450&width=360",
    alt: "Kategorie Damen entdecken",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // How many slides to scroll at once
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // How many slides to scroll at once
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // How many slides to scroll at once
  },
};

const CarouselWithNames = () => {
  return (
    <div className="py-[4%] px-[6%] ">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {images.map((image, index) => (
          <div key={index} className="px-2">
            <img src={image.src} alt={image.alt} />
            <div className="flex items-center py-2">
              <a href="" className="underline">
                <p>{image.alt}</p>
              </a>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselWithNames;
