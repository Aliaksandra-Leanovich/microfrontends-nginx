import styled from "@emotion/styled";
import { Keyboard, Mousewheel, Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as BoldoLogo } from "../../assets/BoldoLogo.svg";
import { ReactComponent as PrestoLogo } from "../../assets/PressLogo .svg";

export const SliderLogos = () => {
  return (
    <WrapperSC>
      <LeftBlockSC />
      <RightBlockSC />
      <CustomSwiperSC
        cssMode={true}
        mousewheel={true}
        slidesPerView={3}
        spaceBetween={66}
        keyboard={true}
        breakpoints={{
          1152: {
            slidesPerView: 6,
          },
        }}
        loop={true}
        modules={[Mousewheel, Keyboard, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <LogoContainerSC>
            <PrestoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <BoldoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <PrestoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <BoldoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <PrestoLogo />
          </LogoContainerSC>
        </SwiperSlide>
        <SwiperSlide>
          <LogoContainerSC>
            <BoldoLogo />
          </LogoContainerSC>
        </SwiperSlide>
      </CustomSwiperSC>
    </WrapperSC>
  );
};
export const WrapperSC = styled.div`
  position: relative;
  width: 100%;
`;

export const CustomSwiperSC = styled(Swiper)`
  z-index: 0 !important;

  width: 100%;
`;

export const LeftBlockSC = styled.div`
  width: 40%;
  position: absolute;
  height: 48px;
  z-index: 1;
  top: 0;
  left: 0;

  background: linear-gradient(
    90deg,
    rgba(10, 38, 64, 1) 22%,
    rgba(255, 255, 255, 0) 53%
  );
`;
export const RightBlockSC = styled.div`
  width: 40%;
  position: absolute;
  height: 48px;
  z-index: 1;
  top: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 47%,
    rgba(10, 38, 64, 1) 78%
  );
`;
export const LogoContainerSC = styled.div`
  width: 144px;
  height: 42px;
`;
