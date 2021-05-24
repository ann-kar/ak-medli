import React from "react";

import "./Footer.scss";
import {Logo, Form, SiteMap} from "../../../components";

function Footer() {

    return (
        <div className="Footer">
            <div className="Footer__main container">
                <div className="Footer__main__logoCnt">
                    <Logo theme="light"/>
                </div>
                <Form/>
                <SiteMap/>
            </div>
        </div>
    )
}

export default Footer;