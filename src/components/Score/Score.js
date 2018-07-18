import React from "react";
import "./Score.css";

const Score = props => (
    <div className="scores">
        <p className="right margin-top-bot">High Score: {props.highscore}</p>
        <p className="center margin-top-bot">{props.alert}</p>
        <p className="left margin-top-bot">Current Score: {props.score}</p>
    </div>
);

export default Score;
