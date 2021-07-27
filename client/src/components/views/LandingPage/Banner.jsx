import React from "react";
import {
  BannerContainer,
  Wrapper,
  BannerImage,
  BannerContents,
} from "./styles/styled.js";

const Banner = (props) => {
  const { bannerTitle, bannerSubTitle1, bannerSubTitle2 } = props;
  return (
    <BannerContainer className='BannerContainer'>
      <Wrapper className='Wrapper'>
        <BannerImage
          className='BannerImage'
          style={{ backgroundImage: `url(${props.image})` }}
        />
        <BannerContents className='BannerContents'>
          <h1>{bannerTitle}</h1>
          <div>{bannerSubTitle1}</div>
          <div>{bannerSubTitle2}</div>
        </BannerContents>
      </Wrapper>
    </BannerContainer>
  );
};

export default Banner;

/*
  banner + section 합쳐서 banner 형태로 landingpage에 출력
*/
