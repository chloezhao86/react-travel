import React from "react";
import { Image, Carousel as AntCarousel } from "antd";
import carouselImage1 from "../../assets/carousel_1.jpg";
import carouselImage2 from "../../assets/carousel_2.jpg";
import carouselImage3 from "../../assets/carousel_3.jpg";
import styled from "styled-components";

const StyledAntCarousel = styled(AntCarousel)`
  text-align: center;
  height: 250px;
  line-height: 250px;
  background: #364d79;
  overflow: hidden;
`;

export const Carousel = () => {
  return (
    <StyledAntCarousel autoplay>
      <Image src={carouselImage1} />
      <Image src={carouselImage2} />
      <Image src={carouselImage3} />
    </StyledAntCarousel>
  );
};
