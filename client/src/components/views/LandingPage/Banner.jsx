import React from "react";
import PropTypes from "prop-types";
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

Banner.propTypes = {
  bannerTitle: PropTypes.string,
  bannerSubTitle1: PropTypes.string,
  bannerSubTitle2: PropTypes.any,
};

export default React.memo(Banner);
