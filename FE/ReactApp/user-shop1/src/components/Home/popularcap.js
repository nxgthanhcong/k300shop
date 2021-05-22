import React from "react";

const PopularCap = function (props) {
    return (
        <div className="popular-cap" style={{backgroundImage: "url('https://theme.hstatic.net/1000042622/1000531425/14/banner_bottom_img.png?v=504);'"}}>
            <div className="popular-cap__content">
                <h1 className="popular-cap__title">CAPS</h1>
                <span className="popular-cap__description">When it comes to true summer essentials, a baseball cap is up there with warm tins of beer, a sand-filled picnic and sunscreen. But more than just being a way of avoiding forcibly squinting at the sun, the right style can also add some personality to a bog standard shorts and T-shirt look</span>
                <button className="popular-cap__btn btn">Shop Now</button>
            </div>
        </div>
    );
}

export default PopularCap;