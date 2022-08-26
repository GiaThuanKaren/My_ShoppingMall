import React, { useEffect, useId, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import style from "./HomeSlider.module.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay, Pagination } from "swiper";
import { FetchBanner } from "../../../api";

interface StateType {
  ListItemBanner: [];
}

export default function HomeSlider() {
  const id = useId();
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
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {state.ListItemBanner.length >= 0 &&
          state.ListItemBanner.map((item: any, idx: any) => {
            
            return (
              <>
                <SwiperSlide key={`${Date.now()}${Math.random()}`}>
                  <img
                    width={"100%"}
                    height={"auto"}
                    style={{ objectFit: "contain" }}
                    src={`https://cdn.vuahanghieu.com/unsafe/0x540/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/${item.image_url}`}
                    alt={item.title}
                  />
                </SwiperSlide>
              </>
            );
          })}
      </Swiper>
    </>
  );
}
