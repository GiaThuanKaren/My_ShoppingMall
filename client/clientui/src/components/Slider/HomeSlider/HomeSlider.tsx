import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./HomeSlider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { FetchBanner } from "../../../api";

interface StateType {
  ListItemBanner: [];
}

export default function HomeSlider() {
  const [state, SetState] = useState<StateType>({
    ListItemBanner: [],
  });
  useEffect(() => {
    async function fetch() {
      let data = await FetchBanner();
      SetState({
        ...state,
        ListItemBanner: data.result,
      });
    }
    fetch();
  }, []);

  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {state.ListItemBanner.length != 0 &&
          state.ListItemBanner.map((item: any, dix: any) => {
            return (
              <>
                <SwiperSlide>
                  <img src={`https://cdn.vuahanghieu.com/unsafe/0x540/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/${item.image_url}`} />
                </SwiperSlide>
              </>
            );
          })}
        {/* <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </>
  );
}
