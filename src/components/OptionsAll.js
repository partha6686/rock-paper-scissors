import React from "react";
import Option from "./Option";
import TriangleImg from "../images/bg-triangle.svg";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";

function OptionsAll(props) {
    return (
        <div className="body-conatiner">
            <img className="tri-img" src={TriangleImg} alt="triangle-img" />
            <Option handleClick={props.handleClick} img={paper} val="paper" />
            <Option handleClick={props.handleClick} img={scissors} val="scissors" />
            <Option handleClick={props.handleClick} img={rock} val="rock" />
        </div>
    );
}

export default OptionsAll;