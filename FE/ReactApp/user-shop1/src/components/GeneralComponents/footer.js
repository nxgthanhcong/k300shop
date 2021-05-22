import React from "react";

const Footer = function (props) {
    return (
        <div>
            <div class="grid footer-top">
                <div class="row">
                    <div class="col l-4 m-12 c-12">
                        <div class="footer-infor">
                            <a href="" class="footer-infor__img-link"><img src="https://theme.hstatic.net/1000042622/1000531425/14/ft-logo.png" alt="" class="footer-infor__img" /></a>
                            <p class="footer-infor__address">214E Nguyễn Trãi, Phường Nguyễn Cư Trinh, Quận 1, TP.HCM</p>
                            <a href="tel:0383980693" class="footer-infor__tel"><i class="ti-headphone-alt"></i> 0383 980 693</a>
                            <a href="mailto:nxgthanhcong@gmail.com" class="footer-infor__mail"><i class="ti-email"></i> nxgthanhcong@gmail.com</a>
                            <a href="http://online.gov.vn/Home/WebDetails/31148" class="footer-infor__imgbct-link"><img src="https://theme.hstatic.net/1000042622/1000531425/14/logo-bct.png" alt="" class="footer-infor__imgbct" /></a>
                        </div>
                    </div>
                    <div class="col l-4 m-12 c-12 footer-mid">
                        <div class="row">
                            <div class="col c-6">
                                <div class="footer-custom-help">
                                    <h1 class="footer-custom-help__lable">HỖ TRỢ KHÁCH HÀNG</h1>
                                    <a href="" class="footer-custom-help__link">Hướng Dẫn Mua Hàng</a>
                                    <a href="" class="footer-custom-help__link">Hướng Dẫn Đổi Hàng</a>
                                    <a href="" class="footer-custom-help__link">Câu Hỏi Thường Gặp</a>
                                    <a href="" class="footer-custom-help__link">Vận Chuyển Giao Hàng</a>  
                                </div>
                            </div>
                            <div class="col c-6">
                                <div class="footer-service">
                                    <h1 class="footer-service__lable">THÔNG TIN & DỊCH VỤ</h1>
                                    <a href="" class="footer-service__link">Về chúng tôi</a>
                                    <a href="" class="footer-service__link">Tuyển dụng</a>
                                    <a href="" class="footer-service__link">Chính sách bảo hành</a>
                                    <a href="" class="footer-service__link">Chính sách bảo mật</a>
                                    <a href="" class="footer-service__link">Điều khoản và điền kiện</a>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col l-4 m-12 c-12">
                        <div class="footer-contact">
                            <h1 class="footer-contact__label">FOLLOW US</h1>
                            <div class="footer-contact__icon-area">
                                <a href="" class="footer-contact__icon"><i class="ti-facebook"></i></a>
                                <a href="" class="footer-contact__icon"><i class="ti-instagram"></i></a>
                            </div>
                            <h1 class="footer-contact__text-dki">ĐĂNG KÍ NHẬN THÔNG TIN MỚI TỪ THEK300</h1>
                            <div class="footer-contact__input-area">
                                <input type="text" placeholder="Your email here" class="footer-contact__input" />
                                <button class="footer-contact__btn-dki btn--primary">Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">
                <h2 class="footer-copyright__label">Copyrights © 2019 by Three Hundred Official. Copy by Ng Thanh Cong </h2>
            </div>
        </div>
    );
}

export default Footer;