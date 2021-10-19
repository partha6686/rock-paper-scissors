import React, { useState } from "react";
import rock from "../images/icon-rock.svg";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import Option from "./Option";
import OptionsAll from "./OptionsAll";
import Game from "./Game";
var res;

function Body(props) {
  const Img = {
    rock: rock,
    paper: paper,
    scissors: scissors
  };
  const [game, setGame] = useState({
    result: "",
    userChoice: "",
    houseChoice: ""
  });

  function handleHouse() {
    const option = ["rock", "paper", "scissors"];
    const choiceIndex = Math.floor(Math.random() * 3);
    setGame((prevVal) => {
      return {
        ...prevVal,
        houseChoice: option[choiceIndex]
      };
    });
  }

  function handleClick(userEntry) {
    setGame((prevVal) => {
      return {
        ...prevVal,
        userChoice: userEntry
      };
    });
    setTimeout(handleHouse, 1000);
  }

  function setResult() {
    const userChoice = game.userChoice;
    const houseChoice = game.houseChoice;
    res = Game(userChoice, houseChoice);
    if (res) {
      setGame((prevVal) => {
        return { ...prevVal, result: res };
      });
      if (res === "WON") {
        props.setScore(props.score + 1);
      } else if (res === "LOSE") {
        props.setScore(props.score - 1);
      } else {
        props.setScore(props.score);
      }
    }
  }

  function retry() {
    setGame({
      result: "",
      userChoice: "",
      houseChoice: ""
    });
  }

  if (!game.userChoice) {
    return <OptionsAll handleClick={handleClick} />;
  } else if (!game.houseChoice) {
    return (
      <div className="body-conatiner">
        <h3 className="userHeading">YOU PICKED</h3>
        <Option img={Img[game.userChoice]} val={game.userChoice + "-bg"} />
        <h3 className="houseHeading">THE HOUSE PICKED</h3>
      </div>
    );
  } else if (!game.result) {
    setTimeout(setResult, 1000);
    return (
      <div className="body-conatiner">
        <h3 className="userHeading">YOU PICKED</h3>
        <Option img={Img[game.userChoice]} val={game.userChoice + "-bg"} />
        <h3 className="houseHeading">THE HOUSE PICKED</h3>
        <Option img={Img[game.houseChoice]} val={game.houseChoice + "-hbg"} />
      </div>
    );
  } else {
    return (
      <div className="body-conatiner">
        <h3 className="userHeading">YOU PICKED</h3>
        <Option img={Img[game.userChoice]} val={game.userChoice + "-bg"} />
        <h3 className="houseHeading">THE HOUSE PICKED</h3>
        <Option img={Img[game.houseChoice]} val={game.houseChoice + "-hbg"} />
        <h1>{game.result === "DRAW" ? game.result : "YOU " + game.result}</h1>
        <button className="retry-btn" onClick={retry}>
          RETRY
        </button>
      </div>
    );
  }
}

export default Body;
export { res };