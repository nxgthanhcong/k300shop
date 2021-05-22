import React from 'react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
SwiperCore.use([Navigation, Pagination, Autoplay]);


class DetailTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            arrLiveShowImg: ["https://product.hstatic.net/1000042622/product/img_1098_0c00dbbdbe484863afe38acf549e48d8_master.jpg", "https://product.hstatic.net/1000042622/product/img_1084_6289fef3ee4c466e87b6893b4fdbf0b6_master.jpg", "https://product.hstatic.net/1000042622/product/size_guide_-_3_hundred_d1e315fead004f22a16b2acc6af07595_master.jpg", "https://product.hstatic.net/1000042622/product/img_1085_006a9405754b483b9c6043d27753a5da_master.jpg", "https://product.hstatic.net/1000042622/product/img_1061_2bd2eca9e8074de183d297517e8f93eb_master.jpg", "https://product.hstatic.net/1000042622/product/img_1073_e9b31c8299b54e43a787e0225a3cefd6_master.jpg"],
        };
    }
    render() {
        return (
            <div class="detail-top">
                <div class="grid wide detail-top__wide">
                    <div class="row">
                        <div class="col l-6">
                            <Swiper 
                                // slidesPerView={1} 
                                loop={true} 
                                style={{zIndex: 1}}
                                pagination={{
                                    "type": "fraction"
                                  }} navigation={true} className="mySwiper"
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
                        <div class="col l-5">
                            <div class="dproduct">
                                <h1 class="dproduct__name">
                                    Champion Graphic Big Logo T-Shirt In Black
                                </h1>
                                <p class="dproduct__price">350.000 vnđ</p>
                                <div class="dproduct__brand-cate-code">
                                    <p class="dproduct__brand">Thương hiệu: AAPE</p>
                                    <p class="dproduct__cate">Loại: T-SHIRTS</p>
                                    <p class="dproduct__code">MSP: ABCXYZ</p>
                                </div>
                                <div class="dproduct__size">
                                    <h2 class="dproduct__size-label">SIZE: </h2>
                                    <ul class="dproduct__size-list">
                                        <li class="dproduct__size-item dproduct__size-item--active">L</li>
                                        <li class="dproduct__size-item">S</li>
                                        <li class="dproduct__size-item">M</li>
                                        <li class="dproduct__size-item">XL</li>
                                        <li class="dproduct__size-item">XXL</li>
                                    </ul>
                                </div>
                                <div class="dproduct__color">
                                    <h2 class="dproduct__color-label">Màu sắc: </h2>
                                    <span class="dproduct__color-item dproduct__color-item--active">Black</span>
                                </div>
                                <div class="dproduct__quantity">
                                    <h2 class="dproduct__quantity-label">Số lượng: </h2>
                                    <ul class="dproduct__quantity-list">
                                        <li class="dproduct__quantity-item">-</li>
                                        <li class="dproduct__quantity-item">1</li>
                                        <li class="dproduct__quantity-item">+</li>
                                    </ul>
                                    <span class="dproduct__quantity-availabel btn--primary">Hiện còn: 3</span>
                                </div>
                                <button class="dproduct__add-to-cart btn--primary">Thêm vào giỏ</button>
                                <button class="dproduct__buy-now btn">Mua ngay</button>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailTop;