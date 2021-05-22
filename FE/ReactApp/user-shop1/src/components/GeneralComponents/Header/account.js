import React from "react";

//Account
const Account = function (props) {
    const isLogined = props.isLogined;
    if(isLogined) {
        return <UserLogined />;
    } else {
        return <UnUserLogined />;
    }
}
const UserLogined = function (props) {
    return (
        <li className="personal-list__item personal-list__item-account show-hiden-content">
            <a href="/#" className="personal-list__link">
                <div className="account-avatar" style={{backgroundImage: "url(" + props.background1 + ")"}}></div>
                Ng Thanh Cong
            </a>
            <ul className="account-content hiden-content">
                <li className="account-logined__item">
                    <a href="/#" className="account-logined__link underline_effect">ACCOUNT SETTING</a>
                </li>
                <li className="account-logined__item">
                    <a href="/#" className="account-logined__link underline_effect">LOGOUT</a>
                </li>
            </ul>
        </li>
    );
}
const UnUserLogined = function (props) {
    return (
        <li className="personal-list__item personal-list__item-account show-hiden-content">
            <a href="/#" className="personal-list__link underline_effect">
                Account <i className="personal-list__icon personal-list__icon--account-unlogin ti-user"></i>
            </a>
            <ul className="account-content hiden-content">
                <li className="account-unlogin__item">
                    <a href="/#" className="account-unlogin__link">SIGN UP</a>
                </li>
                <li className="account-unlogin__item">
                    <a href="/#" className="account-unlogin__link">LOGIN</a>
                </li>
            </ul>
        </li>
    );
}
//End Account

export default Account;