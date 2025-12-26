import React from "react";
import ReactDOM from "react-dom/client";
import { FaGithubSquare } from "react-icons/fa";


export default function Cards(props) {
  return (
    <>
      <div id="cardouter">
        <img id="images" src={props.avatar} alt="img"></img>
        <div id="cardimg">
          <img
            id="gitimg"
            src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"
          ></img>
          <a href={props.link}>Github Profile</a>
         
         
        </div>

        <div id="cardname">{props.name}</div>
      </div>
    </>
  );
}
