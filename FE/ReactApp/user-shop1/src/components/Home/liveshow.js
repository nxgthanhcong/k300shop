import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Autoplay]);

class LiveShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrLiveShowImg: ["https://theme.hstatic.net/1000042622/1000531425/14/slideshow_2.jpg", "https://theme.hstatic.net/1000042622/1000531425/14/slideshow_3.jpg", "https://theme.hstatic.net/1000042622/1000531425/14/slideshow_1.jpg", "https://theme.hstatic.net/1000042622/1000531425/14/slideshow_4.jpg"],
        };
    }
    render () {
        return (
            <div className="slideshow-container">
                <Swiper 
                    slidesPerView={1} 
                    spaceBetween={30} 
                    loop={true} 
                    autoplay={{
                        delay: 2000,
                    }}
                    className="mySwiper"
                    style={{zIndex: -100}}
                >
                    {
                    this.state.arrLiveShowImg.map((item) => (
                        <SwiperSlide>
                            <div>
                                <img style={{width: "100%"}} src={item} alt="" />
                            </div>
                        </SwiperSlide>
                    ))
                    }
                </Swiper>
            </div>
        );
    }
}

export default LiveShow;