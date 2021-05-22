import React from "react";


import LiveShow from "./liveshow";
import HighlightStreetwear from "./highlight";
import PopularCate from "./popularcate";
import PopularShoe from "./popularshoe";
import PopularCap from "./popularcap";
import NewIn from "./newin";
import BannerBot from "./bannerbot";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="main">
                <LiveShow />
                <HighlightStreetwear />
                <PopularCate />
                <PopularShoe />
                <PopularCap />
                <NewIn />
                <BannerBot />
            </div>
        );
    }
}
export default Main;