import React from 'react'
import 'swiper/css/bundle'
import { SwiperSlide, Swiper } from 'swiper/react'
import SwiperCore, { Autoplay, Pagination } from 'swiper'
import styled from 'styled-components'
import style from '@/assets/global-style'

const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: auto;
  background: white;
  .before {
    position: absolute;
    top: 0;
    height: 60%;
    width: 100%;
    background: ${style['theme-color']};
  }
  .slider-container {
    position: relative;
    width: 98%;
    height: 160px;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${style['theme-color']};
    }
  }
`
// test
SwiperCore.use([Autoplay])

function Slider(props) {
  const { bannerList } = props

  return (
    <SliderContainer>
      <div className="before"></div>
      <div className="slider-container">
        <div className="swiper-wrapper">
          <Swiper
            modules={[Pagination]}
            autoplay
            pagination={{ type: 'bullets' }}
          >
            {bannerList.map((slider, index) => {
              return (
                <SwiperSlide key={index}>
                  <img
                    src={slider.imageUrl}
                    width="100%"
                    height="100%"
                    alt="推荐"
                  />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </SliderContainer>
  )
}

export default React.memo(Slider)
