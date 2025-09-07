import React from "react"; //yeh purane/normal javascript mein nahi chlega kyunki uss time par import jaisa kuch nahi tha toh humein pehle browser ko btana padega yeh module type ka JS h toh html mein jaha js file ko connect kiya h src se waha type="module" mention krna padega.
import ReactDOM from "react-dom/client";

// const heads1 = React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"red", fontSize:"30px" , color:"white"}},"Hello Dear");

// const heads2 = React.createElement("h1",{id:"second",className:"Rahul",style:{backgroundColor:"black", fontSize:"30px" , color:"white"}},"Hello Buddy");



// const MainRoot = ReactDOM.createRoot(document.getElementById("root"));

// MainRoot.render(heads1);
// MainRoot.render(heads2);

// import krne ke baad server bnana padta h jaha par apna code chla paaye uske liye command dena padta h 
// npx parcel "filename.html" yeh ek server deta h jismein aapka output hota h 
// aur saath hi mein 2 files bhi dega .parcel-cache & dist
// .parcel-cache mein aapke files pehle se hi compile hue rehte h aur agar aapne file mein changes/modification krke wapas "npx parcel "filename.html"" run kiya toh pura file compile nahi hoga bas changed part hi compile hoga jisse result server par fast show hoga.
// dist file bhi milti hain par uska main kaam hota h jab aapko production ready code chahiye server par daalne ke liye toh aap command daalte h 
// npx parcel build "filename.html" isse hoga yeh aapke 3 file banti h dist ke andar , 1st html file jo bohot hi optimized/compressed form mein hoti h , 2nd js file jo bhi bohot compressed/optimized form mein hoti h taaki fast run ho server par aur 3rd banti h .map file jo aapke code ko purane version ke code mein convert kr sakti h lekin iska use nahi krna h naa isko galti se bhi server par daalna h kyunki isse koi bhi galat tareeke se use krke aapke code ke logic ko chori/padh sakta h.
// agar aap yeh porduction ready code k liye bundler/parcel ka use nahi krenge jo aapko sabkuch dist file aur parcelcache file mein de rha h tab aapko saare files ex:- class4.html , class4.js , react , react-dom & other dependencies jiss par react and react-dom and other files dependent h , isiliye hum bundler/parcel ka use krte h jo aapka saara kaam easy krdeti h aapke code ko optimize & production level code bnakar.

// Using JSX kaise hum code easily kr sakte h pehle pura React.createElement karke sab argument mein data bhejna padta tha ab direct html form mein kr sakte h 
// const element = React.createElement("h1",{},"Kaise ho Buddy"); yeh end mein return object krta tha aur element mein store ho jaata tha phir render hote time wapas html mein convert hota tha  
// const newelement = <h1>Kaise ho Buddy</h1> //yeh h JSX ka part yeh react ka core part nahi h yeh baad mein aaya h; lekin yeh syntax jo html jaisa dikh rha h yeh js/react nahi smajhta toh yeh jsx ko js mein convert kaun krta h isko convert 
// Babel krta h jo pehle se hi node modules mein available hota h
// MainRoot.render(element);//ismein element append/render hone ke baad html form mein aajayega.
// MainRoot.render(newelement);

//JSX
// <h1>Kaise ho Buddy</h1> 
// Babel: JSX ko React mein convert krta h isiliye babel ko ek transpiler bhi bol sakte h jsx --> react mein convert kr rha h.
//React 
//  React.createElement("h1",{},"Kaise ho Buddy");  yeh ek object return krta h 
// iss object ko .(render) HTML element mein convert krdeta h 


// JSX mein code likhenge
const newelement = <h1>Kaise ho Buddy</h1>
const MainRoot = ReactDOM.createRoot(document.getElementById("root"));
MainRoot.render(newelement);

// const element2 = (
// <h1>Kaise ho Chhote Bhai</h1>
// <h2>Kaise ho Bade Bhai</h2>
// ) yeh error dega kyunki ek root ke andar 2 element/tag nahi daal sakte agar multiple element/tag daalna h toh wrap krke ek element ke andar daalna padega 

const element2 = (
    <div>
        <h1>Kaise ho Chhote Bhai</h1>
        <h2>Kaise ho Bade Bhai</h2>
    </div>
)

// bina div use kre bhi kr sakte h wrap empty use krke
// JSX :- JS expressions bhi use kr sakte h yeh cheez normal html mein nahi kr sakte h

const names = "Raju";
const object = {
    name: "SHYAM",
    AGE: 19,
}


// MainRoot.render(element2);
// MainRoot.render(element3);

const obj2 = {
    backgroundColor: "black",
    color: "white",
    fontSize: "50px"
}

// React Element
const element3 = (
    <>
        {/* JSX mein class nahi hota h Classname hota h , html mein class hota h */}
        <h1 id="first" className="Firstt" >Kaise ho Bohot Bade Bhai {object.name}</h1>

        {/* khudka attribute bhi bna sakte h aur attribute value number bhi rakh sakte h bas bracket ke andar rakhna jisse js expression samjhega {23} */}
        <h2 money="Hello" sunny={23}>Kaise ho Bade Bhai {names}</h2>
        {/* style hamesha object maangta h isiliye aap curly bracket mein object dete h input mein */}
        <p style={obj2}>Samjhe babu bhaiya kaam</p>
        {/* OR */}
        {/* isiliye style do curly bracket expect krta h 1st woh object input leta h jo JS expression h toh isiliye {} curly bracket ke andar lega 2nd object ke andar ke properties pura likh rhe h woh curly bracket mein rehta h ex:- {backgroundColor : "white"}*/}

        <p style={{ backgroundColor: "black", color: "white", fontSize: "50px" }}>Dusra method h yeh bhai</p>
    </>
)


// React Component
// Function Based Component
function greet() {
    return <h1>Aur bhai kaisa hain</h1>
};

const resultelement = greet()
MainRoot.render(resultelement);

const meet = (() => {
    return <h2>Mera Sab Accha hain</h2>
});

//  const meetelement = meet();
//  MainRoot.render(meetelement);

MainRoot.render(meet()); //direct render krado store krane ki jarurat hi nahi h .

// agar multiple ek saath render krane hain toh kya kar sakte h ?
const meetgreet = <>

    {/* yeh dono JS ke expression kyunki , yeh dono function object return kr rhe h toh inhe curly bracket mein daalna padega */}
    {meet()}  
    {greet()}

</>
MainRoot.render(meetgreet);




// Theroy
// ⚡ React App ka Scene
// React app direct HTML file jaise live nahi hota, kyunki:
// Hum JSX likhte hain (<h1>Hello</h1>), browser ise samajh nahi sakta.
// Isko pehle Babel/Parcel transpile karke plain JavaScript banana padta hai.
// Hum import/export (modules) use karte hain → browser ko directly ye bhi samajh nahi aata (pehle bundle karna padta hai).
// React aur ReactDOM library alag-alag packages hote hain (npm ke through aate hain) → unhe bundle karke ek hi file banana padta hai.
// 👉 Isliye humein ek server (Parcel/Vite/Webpack dev server) chahiye hota hai jo:
// Code ko transpile kare,
// Sab dependencies ko bundle kare,
// Files ko browser tak serve kare.