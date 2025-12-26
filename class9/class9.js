import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Cards from "./components/card";
import { FaGithubSquare } from "react-icons/fa";
import Usefetch from "./components/usefetch";

function GithubProfile() {
 

  const {fetchdata , namesearch , namestore , profiledata} = Usefetch();
  //(usefetch()) mera custom hook (usefetch.js file) jiske andar mein kuch part of code likhe h h taaki code ki readability badhi rhe ,usefetch() ke andar  return kiya hu saara elements 
  // ex:-{fetchdata , namesearch , namestore ,profiledata}  aur yeh customhook(usefetch()) run hoga toh saare elements jo isne store kiye h woh sab jaha jaha use ho  rhe h  main file ke  code mein sab jagah initialized ho jaayenge stored data se 
  // custom hook ki advantage yeh h ki meine jaise usefetch() hook bnaya h usefetch.js file mein toh mein usse multiple files mein use kr sakta hu import krake

  const fontsize = {
    fontSize: "50px",
    
  }

  useEffect(() => {
    fetchdata();
  }, [namestore]);

  return (
    <>
      <h1 id="header" >
        <FaGithubSquare id="icons" style={fontsize}/>
        {/* <img id="headerimg" src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg"></img> */}
        <span id="headerspan">
          Github Profile Viewer
        </span>
         
        </h1>

      <div id="searcharea">
        {/* label ka "for" attribute input ka "id" , Dono same value rakhne se label us input se bind ho jaata hai */}

        <label htmlFor="search"></label>
        <input id="searchhere" placeholder="Search Here..." value={namesearch} onChange={(event)=>setnamesearch(event.target.value)}/>
        <button id="search" onClick={()=>{setnamestore(namesearch)}}>Search</button>
      </div>

      <div id="cardsarea">
      {console.log("profiledata:", profiledata)}
        {  profiledata.map((value) => (
             <Cards
            key={value.id}
            avatar={value.avatar_url}
            link={value.html_url}
            name={value.login}
          />
        ))}
      </div>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<GithubProfile/>);
