import React from "react";

import "./Home.scss";
import {Header, Front, Stats, Community, Benefits, Footer} from "../Home";

function Home() {

    return (
        <div className="Home">
            <Header/>
            <Front/>
            <Stats/>
            <Community />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Home;