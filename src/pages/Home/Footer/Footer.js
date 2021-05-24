import React from "react";

import "./Footer.scss";
import {Logo, Form, SiteMap, Terms} from "../../../components";

function Footer() {

    return (
        <div className="Footer">
            <div className="Footer__main container">
                <div className="Footer__main__logoCnt">
                    <Logo theme="light"/>
                </div>
                <Form/>
                <SiteMap/>
                <Terms/>
            </div>
        </div>
    )
}

export default Footer;