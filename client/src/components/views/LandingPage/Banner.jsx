import React from "react";
import { BannerContainer, Wrapper } from "./styles/styled.js";

const Banner = () => {
  return (
    <BannerContainer>
      <Wrapper>
        <h2>함께 성장할 동료를 찾아보세요.</h2>
        <p>혼자서는 막막할 때, 당신에게는 동료가 필요할 거에요.</p>
        <p>같은 방향과 목표를 향해 나아갈 동료를 찾아보세요!</p>
      </Wrapper>
    </BannerContainer>
  );
};

export default Banner;
