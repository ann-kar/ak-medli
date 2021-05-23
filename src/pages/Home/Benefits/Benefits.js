import React from "react";

import "./Benefits.scss";
import {BenefitsItem} from "../Benefits/BenefitsItem";
import chat from "../../../assets/chat.svg";
import coach from "../../../assets/coach.svg";
import textChat from "../../../assets/textChat.svg";

function Benefits() {

    const benefitsData = [
        {
            title: "1 FREE chat session",
            description: "Start with a free text based chat session online",
            image: textChat,
            id: 0
        },
        {
            title: "Personal Coach",
            description: "A dedicated coach to help you through your journey",
            image: coach,
            id: 1
        },
        {
            title: "Text chat session",
            description: "An excellent way of preaparing a projects wireframe",
            image: textChat,
            id: 2
        }
    ];

    return (
        <div className="Benefits">
            <h2 className="Benefits__title">What you’re getting?</h2>
            <h3 className="Benefits__description">We bring you personalized development programs that are backed by research and crafted from the years of experience</h3>
            {benefitsData.map(el => <BenefitsItem
                                                    key={`ben-${el.id}`}
                                                    title={el.title}
                                                    description={el.description}
                                                    image={el.image}/>)}
        </div>
    )
}

export default Benefits;