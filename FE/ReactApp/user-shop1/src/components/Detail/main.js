import React from 'react';
import DetailTop from './detailtop';
import DetailBot from './detailbot';
import DetailRelate from './detailrelate';
import DetailSaw from './detailsaw';

const Main = function (props) {
    return (
        <div className="main">
            <div className="wrap-detail-page">
                <DetailTop />
                <DetailBot />
                <DetailRelate />
                <DetailSaw />
            </div>
        </div>
    );
}
export default Main;