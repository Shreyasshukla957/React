// Dev dependecy chahiye apne ko parcel toh npm install -D parcel krdenge toh dev dependency mein chla jaayega toh production mein nahi jaata h woh 

import React from "react";
import ReactDOM from "react-dom/client"

const element = <h1>Hello Mere Bhaiyonn </h1>
const Root = ReactDOM.createRoot(document.getElementById("root"));

// JSX ke andar JS ke kisibhi expression ko daal sakte ho
// JSX ke andar statement nahi likh sakte h --> ex:- let x = 2;
// Expression woh hote h jo aapka koi output laakarde (Result) produce kre
// Result dene wale expression woh samajhlega jaise ki(String,Number,Array)

let obj = {
    name:"Ram",
}

const arr = [20,30,40,"Name"];

function Elemental (name){
    // {name} yeh ek statement h agar yahi let name = "Rohit"; likhenge {} curly brackets ke andar toh react nahi samjhega react exoression samajh sakta h jo result produce krke dede naa ki statement
    return <h1>Ram Ram Bhaiyaji {name}</h1>

    // return <h1>Ram Ram Bhaiyaji {obj}</h1> //yha {obj} obj ek statement h jo ki result hold nahi krta isiliye error dega

    // return <h1>Ram Ram Bhaiyaji {obj.name}</h1> //yha {obj.name} obj.name ek expression h jo value hold kr rha h "Ram" apne andar.

    // return <h1>Ram Ram Bhaiyaji {arr}</h1> //yeh isiliye chal rha h kyunki jsx pehle "arr" par  jaata h aur stored values dekhta h pehle 20 dekhta h phir 30 phir 40 phir Name sab dekhta toh dekhta hain har baar ek result produce kiya h sab expression hain naahi ki statement isiliye  chladeta h yahi agar arr ke andar object stored ho toh nahi chlayega kyunki woh statement hoga naa ki expression jo result dedega isiliye array mein number and string form mein hi data hona chahiye toh chlega
}



// Root.render(Elemental("Rohit"));


// props = {
//     name:"Ram",
//     className:"Nice",
// } iske pass saara data available j jo argument mein isko mila h

function Maan (props){
    // props ek object h jo argument ka data store krke object ke andar rakhta h.
    console.log(props);
    return <h1>Kya naam h tera {props.name} </h1>;
}

Root.render(<Maan name="Ram" className="Nice" />); //yeh tareeka call krne ka JSX ka hain naa ki JS ka , iss tareeke se hum call krsakte h tag form mein aur bas pehla letter Capital hona chahiye , aur argument mein data bhejne ke liye bas key-value pair mein bhejna hain jiska format html ke attribute wala hoga jaise (id="New") iss format mein hum data bhejte h

