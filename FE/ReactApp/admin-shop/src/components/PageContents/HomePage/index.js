import React from 'react'
import BestProduct from './best-product';
import Invoce from './invoce';
import QuickStatis from './quick-statis';
import BoxBrand from '../Product/box-brand';

const HomePage = function () {
    return (
        <div id="app">
            <div className="main-wrapper">
                <div className="navbar-bg"></div>
                <div className="main-content">
                    <section className="section">
                        <QuickStatis />
                        <BoxBrand />
                        <BestProduct />
                        <Invoce />
                    </section>
                </div>
            </div>
        </div>
    );
}

export default HomePage;