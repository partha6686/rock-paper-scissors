import React from "react";
import _ from "lodash";

function Option(props) {
    return (
        <div
            className={props.val + " option-container"}
            onClick={() => {
                !_.endsWith(props.val, "bg") && props.handleClick(props.val);
            }}
        >
            <img src={props.img} alt={props.val + " img"} width={"60px"} />
        </div>
    );
}

export default Option;
