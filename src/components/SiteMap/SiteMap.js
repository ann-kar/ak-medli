import React from "react";

import "./SiteMap.scss";

function SiteMap() {

    return (
        <div className="SiteMap">
            <h2 className="SiteMap__header">Product</h2>
            <ul className="SiteMap__list">
                <li>Updates</li>
                <li>Security</li>
                <li>Chrome Extension</li>
            </ul>
            <h2 className="SiteMap__header">Company</h2>
            <ul className="SiteMap__list">
                <li>About</li>
                <li>Blog</li>
                <li>Join Us</li>
            </ul>
            <h2 className="SiteMap__header">Help</h2>
            <ul className="SiteMap__list">
                <li>Talk to Support</li>
                <li>Support Docs</li>
                <li>API Docs</li>
                <li>System Status</li>
            </ul>
        </div>
    )
}

export default SiteMap;