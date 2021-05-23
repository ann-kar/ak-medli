import React from "react";

import "./Footer.scss";
import {Logo, Form, SiteMap} from "../../../components";

function Footer() {

    return (
        <div className="Footer">
            <Logo/>
            <Form/>
            <SiteMap/>
        </div>
    )
}

export default Footer;