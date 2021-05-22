import React from 'react'
import CollectionHeader from './collectionheader'
import CollectionList from './collectionlist'
import Panigation from './panigation'

const Main = function (props) {
    return (
        <div className="main">
            <div className="wrap-detail-page">
                <CollectionHeader />
                <CollectionList />
                <Panigation />
            </div>
        </div>
    );
}
export default Main;