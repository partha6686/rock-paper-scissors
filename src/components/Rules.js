import React, { useState } from "react";
import RulesPop from "./RulesPop";

function Rules() {
  const [rules, setrules] = useState(false);
  function showRules() {
    setrules(true);
  }
  function hideRules() {
    setrules(false);
  }
  if (!rules) {
    return (
      <button className="btn" onClick={showRules}>
        RULES
      </button>
    );
  }else{
      return(
        <div className="pop-background">
          <RulesPop hideRules={hideRules} />
        </div>
      );
  }
}

export default Rules;
