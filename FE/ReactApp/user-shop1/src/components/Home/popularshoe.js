import React from "react";

const PopularShoe = function (props) {
    return (
        <div className="popular-shoe">
            <h1 className="popular-shoe__title">Jordan 1 Retro High Spider-Man Origin Story</h1>
            <span className="popular-shoe__description">IF SPIDER-MAN WAS A SNEAKER HEAD, HE PROBABLY WOULD BE ROCKING THE JORDAN 1 RETRO HIGH SPIDER-MAN ORIGIN STORY. THIS AJ1 COMES WITH A WHITE UPPER PLUS RED ACCENTS, BLACK NIKE “SWOOSH”, WHITE MIDSOLE, AND TRANSLUCENT SOLE. THESE SNEAKERS RELEASED IN DECEMBER 2018 AND RETAILED FOR $160.</span>
            <div className="popular-shoe__video">
                <iframe width="100%" height="400px" src="https://www.youtube.com/embed/n-f8udP21Jg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <button className="popular-shoe__btn btn">SHOP NOW</button>
            </div>
        </div>
    );
}

export default PopularShoe;