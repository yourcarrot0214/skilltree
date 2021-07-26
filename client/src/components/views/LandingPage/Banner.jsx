import React from "react";
import {
  BannerContainer,
  Wrapper,
  BannerImage,
  BannerContents,
} from "./styles/styled.js";

const Banner = ({ bannerTitle, bannerSubTitle1, bannerSubTitle2 }) => {
  return (
    <BannerContainer>
      <Wrapper>
        <BannerImage />
        <BannerContents className='BannerContents'>
          <h1>{bannerTitle}</h1>
          <p>{bannerSubTitle1}</p>
          <p>{bannerSubTitle2}</p>
        </BannerContents>
      </Wrapper>
    </BannerContainer>
  );
};

export default Banner;
