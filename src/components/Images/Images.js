import React from "react";
import "./Images.css";

const Images = props => (
    <img key={props.id} className="images" alt={props.id} src={props.image} onClick={() => props.markScore(props.id)} />
);


export default Images;