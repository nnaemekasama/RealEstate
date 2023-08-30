import React from "react"
import "./Residencies.css"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import "swiper/css"
import data from "../../utils/slider.json"
import { sliderSettings } from "../../utils/common"

const Residencies = () => {
  return (
    <section className="residencies-wrapper">
      <div className="paddings innerWidth  residencies-container">
        <div className="residencies-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.map((obj, i) => (
            <SwiperSlide key={i}>
              <div className="flexColStart residencies-card">
                <img src={obj.image} alt="home" />
                <span className="secondaryText residencies-price">
                  <span style={{ color: "orange" }}>$</span>
                  <span>{obj.price}</span>
                </span>
                <span className="primaryText">{obj.name}</span>
                <span className="secondaryText">{obj.detail}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="flexCenter residencies-btns">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  )
}
