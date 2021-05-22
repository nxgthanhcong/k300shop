import React from 'react';

import Header from '../GeneralComponents/Header/header';
import Footer from '../GeneralComponents/footer';
import Main from './main';
import ScrollAndChat from '../GeneralComponents/scrollandchat';
import ScrollTop from '../GeneralComponents/scrolltop';

const Detail = function () {
    return (
        <div>
            <Header />
            <ScrollTop />
            <Main />
            <ScrollAndChat />
            <Footer />
        </div>
    );
}

export default Detail;