import React from "react";
import Cart from "./cart";
import Account from "./account";


const HeaderBot = function(props) {
    return (
        <div className="header-bot nonedisplay-both">
            <ul className="menu">
                <li className="menu__item menu-clothing show-hiden-content">
                    <a href="/#" className="menu__link underline_effect">CLOTHING <i className="ti-angle-down menu__link-icon"></i></a>
                    <ul className="menu-clothing__content hiden-content">
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">T-SHIRTS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">SWEATSHIRTS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">HOODIES</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">SHIRTS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">JACKETS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">TANK TOPS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">JEANS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">PANTS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">SHORTS</a>
                        </li>
                        <li className="menu-clothing__content-item">
                            <a href="/#" className="menu-clothing__content-link underline_effect">BOXER</a>
                        </li>
                    </ul>
                </li>
                <li className="menu__item menu-accessories show-hiden-content">
                    <a href="/#" className="menu__link underline_effect">ACCESSORIES <i className="ti-angle-down menu__link-icon"></i></a>
                    <ul className="menu-accessories__content hiden-content">
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">CAPS & HATS</a>
                        </li>
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">BAGS</a>
                        </li>
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">SOCKS</a>
                        </li>
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">SHOELACES</a>
                        </li>
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">JEWELLERY</a>
                        </li>
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">BELTS</a>
                        </li>
                        <li className="menu-accessories__content-item">
                            <a href="/#" className="menu-accessories__content-link underline_effect">BUFFHEAD</a>
                        </li>
                    </ul>
                </li>
                <li className="menu__item">
                    <a href="/#" className="menu__link underline_effect">NEW IN</a>
                </li>
                <li className="menu__item">
                    <a href="/#" className="menu__link underline_effect">SALE</a>
                </li>
                <li className="menu__item">
                    <a href="/#" className="menu__link underline_effect">ABOUT US</a>
                </li>
                <li className="menu__item">
                    <a href="/#" className="menu__link underline_effect">STORE SYSTEM</a>
                </li>
                <li className="menu__item">
                    <a href="/#" className="menu__link underline_effect">SHOP ON INSTAGRAM</a>
                </li>
                <li className="menu__item">
                    <a href="/#" className="menu__link underline_effect">CONTACT</a>
                </li>
            </ul>
        </div>
    );
}
const HeaderTop = function(props) {
    return (
        <div className="header-top nonedisplay-both">
            <div className="logo">
                <img src="https://theme.hstatic.net/1000042622/1000531425/14/logo.png?v=497" alt="" className="logo__img" />
            </div>
            <ul className="personal-list">
                <li className="personal-list__item personal-list__item-search show-hiden-content">
                    <a href="/#" className="personal-list__link underline_effect">Search <i className="personal-list__icon personal-list__icon--search ti-search"></i></a>
                    <div className="search-content">
                        <input type="text" className="search-content__text" />
                        <i className="search-content__icon ti-search"></i>
                    </div>
                </li>
                <Account isLogined={props.isLogined} />
                <Cart isCartEmpty={false} />
            </ul>
        </div>
    );
}
const MHeader = function(props) {
    return (
        <div className="mheader">
            <div className="mheader__content">
                <label htmlFor="mainsidebar-check" className="mheader__list-icon-wrap">
                    <i className="ti-list mheader__list-icon">
                
                    </i>
                </label>
                
                <img src="https://theme.hstatic.net/1000042622/1000531425/14/logo.png?v=497" alt="" className="mheader__logo" />
                <div className="mheader__cart">
                    {/* <!-- <div className="personal-list__item personal-list__item--cart-empty  show-hiden-content">
                        <a href="/#" className="personal-list__link underline_effect">Cart <i className="personal-list__icon personal-list__icon--cart-empty ti-shopping-cart"></i></a>
                        <div className="cart-empty">
                            <img src="data:image/png;base64,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" alt="" className="cart-empty__img">
                            <h3 className="cart-empty__text">Cart is empty</h3>
                        </div>
                        
                    </div> --> */}


                    <div className="personal-list__item personal-list__item--cart-full  show-hiden-content">
                        <a href="/#" className="personal-list__link underline_effect">Cart <i className="personal-list__icon personal-list__icon--cart-empty ti-shopping-cart-full"></i></a>
                        
                        <div className="cart-full">
                            <div className="cart-info">
                                <ul className="cart-list">
                                    <li className="cart-item">
                                        <img src="https://product.hstatic.net/1000042622/product/9y5a6757_7218429a06a84fe9b8a584ec42aab6a5_small.jpg" alt="" className="cart-item__img" />
                                        <div className="cart-item-text">
                                            <div className="cart-item__product-info">
                                                <h3 className="cart-item__name">Skinny Jeans In Mid Wash Blue Jeans In Mid Wash Bluedddddddddddd</h3>
                                                <span className="cart-item__size-color">30 / Blue</span>
                                            </div>
                                            <span className="cart-item__quantity">sl: 1</span>
                                            <span className="cart-item__price">350.000 vnđ</span>
                                            <span className="cart-item__delete"><i className="ti-close cart-item__delete-icon"></i></span>
                                        </div>
                                    </li>
                                    <li className="cart-item">
                                        <img src="https://product.hstatic.net/1000042622/product/9y5a6757_7218429a06a84fe9b8a584ec42aab6a5_small.jpg" alt="" className="cart-item__img" />
                                        <div className="cart-item-text">
                                            <div className="cart-item__product-info">
                                                <h3 className="cart-item__name">Skinny Jeans In Mid Wash Blue</h3>
                                                <span className="cart-item__size-color">30 / Blue</span>
                                            </div>
                                            <span className="cart-item__quantity">sl: 1</span>
                                            <span className="cart-item__price">350.000 vnđ</span>
                                            <span className="cart-item__delete"><i className="ti-close cart-item__delete-icon"></i></span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="cart__total-price">
                                <h3 className="cart__total-price-label">Total: </h3>
                                <span><div className="cart__total-price-number">1.000.000 vnđ</div></span>
                            </div>
                            <div className="cart-control">
                                <button className="btn cart-control__continue-shopping">Continue Shopping</button>
                                <button className="btn btn--primary cart-control__checkout">Checkout Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <input hidden type="checkbox" name="" id="mainsidebar-check" />
            <div className="mainsidebar">
                <div className="mainsidebar__fixed">
                    <div className="mainsidebar__logo">
                        <img src="https://theme.hstatic.net/1000042622/1000531425/14/logo.png?v=497" alt="" className="mainsidebar__logo-img" />
                        <label htmlFor="mainsidebar-check" className="mheader__list-icon-wrap">
                            <i className="ti-close mainsidebar__logo-close"></i>
                        </label>
                    </div>
                    <div className="mainsidebar__search">
                        <input type="text" className="mainsidebar__search-input" placeholder="Tìm sản phẩm" />
                        <button className="mainsidebar__search-btn btn--primary">Tìm</button>
                    </div>
                </div>
                <div className="mainmenu">
                    <li className="mainitem">
                        <label htmlFor="clothing-check" className="mainbtn-dropdown">
                            CLOTHING
                            <i className="ti-plus"></i>
                        </label>
                        <input hidden type="checkbox" name="" id="clothing-check" />
                        <div className="smainmenu">
                            <a href="/#" className="smainmenu__item">T-SHIRTS</a>
                            <a href="/#" className="smainmenu__item">SWEATSHIRTS</a>
                            <a href="/#" className="smainmenu__item">HOODIES</a>
                            <a href="/#" className="smainmenu__item">SHIRTS</a>
                            <a href="/#" className="smainmenu__item">JACKETS</a>
                            <a href="/#" className="smainmenu__item">TANK TOPS</a>
                            <a href="/#" className="smainmenu__item">JEANS</a>
                            <a href="/#" className="smainmenu__item">PANTS</a>
                            <a href="/#" className="smainmenu__item">SHORTS</a>
                            <a href="/#" className="smainmenu__item">BOXER</a>
                        </div>
                    </li>
                    <li className="mainitem">
                        <label htmlFor="accessories-check" className="mainbtn-dropdown">
                            ACCESSORIES
                            <i className="ti-plus"></i>
                        </label>
                        <input hidden type="checkbox" name="" id="accessories-check" />
                        <div className="smainmenu">
                            <a href="/#" className="smainmenu__item">CAPS & HATS</a>
                            <a href="/#" className="smainmenu__item">BAGS</a>
                            <a href="/#" className="smainmenu__item">SOCKS</a>
                            <a href="/#" className="smainmenu__item">SHOELACES</a>
                            <a href="/#" className="smainmenu__item">JEWELLERY</a>
                            <a href="/#" className="smainmenu__item">BELTS</a>
                            <a href="/#" className="smainmenu__item">BUFFHEAD</a>
                        </div>
                    </li>
                    <li className="mainitem">
                        <label htmlFor="" className="mainbtn-dropdown">
                            CLOTHING
                        </label>
                    </li>
                    <li className="mainitem">
                        <label htmlFor="" className="mainbtn-dropdown">
                            ACESSORIES
                        </label>
                    </li>
                </div>
            </div>
            <label htmlFor="mainsidebar-check" className="overlay">

            </label >
            
        </div>
    );
}
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            background1: "./asset/img/avt.png",
            isLogined: false,
        };
    }
    render() {
        return (
            <div className="header">
                <HeaderTop background1={this.state.background1} isLogined={this.state.isLogined}/>
                <HeaderBot />
                <MHeader />
            </div>
        );
    }
}

export default Header;