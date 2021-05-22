import React from "react";

const PopularCate = function (props) {
    return (
        <div className="grid wide popular-cate">
            <div className="row">
                <div className="col l-6 m-6 c-12 popular-cate__item">
                    <img src="http://theme.hstatic.net/1000042622/1000531425/14/hc_img_1.png" alt="" className="popular-cate__img" />
                    <div className="popular-cate__content">
                        <div className="popular-cate__name">T-SHIRTS</div>
                        <button className="btn--primary popular-cate__btn">Shop Now</button>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12 popular-cate__item">
                    <img src="http://theme.hstatic.net/1000042622/1000531425/14/hc_img_2.png" alt="" className="popular-cate__img" />
                    <div className="popular-cate__content">
                        <div className="popular-cate__name">SHIRTS</div>
                        <button className="btn--primary popular-cate__btn">Shop Now</button>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12 popular-cate__item">
                    <img src="http://theme.hstatic.net/1000042622/1000531425/14/hc_img_3.png" alt="" className="popular-cate__img" />
                    <div className="popular-cate__content">
                        <div className="popular-cate__name">HOOIES</div>
                        <button className="btn--primary popular-cate__btn">Shop Now</button>
                    </div>
                </div>
                <div className="col l-6 m-6 c-12 popular-cate__item">
                    <img src="http://theme.hstatic.net/1000042622/1000531425/14/hc_img_4.png" alt="" className="popular-cate__img" />
                    <div className="popular-cate__content">
                        <div className="popular-cate__name">PANTS</div>
                        <button className="btn--primary popular-cate__btn">Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopularCate;