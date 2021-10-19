import React from "react";
import Cross from "../images/icon-close.svg";
import RuleImg from "../images/image-rules.svg";

function RulesPop(props){
    return (
            <div className="rules">
                <div className="rules-container">
                    <h3>RULES</h3>
                    <img className="close-btn" onClick={props.hideRules} src={Cross} alt="close-btn" />
                    <img className="rules-img" src={RuleImg} alt="Rules" />
                </div>
            </div>
    );
}

export default RulesPop;