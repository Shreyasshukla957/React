const heads1 = React.createElement("h1",{id:"first",className:"Rahul",style:{backgroundColor:"red" , fontSize:"30px" , color:"white"}},"Hello Dear");

// const heads1 = React.createElement(
//   "h1",
//   {
//     id: "first",
//     className: "Rahul",
//     style: { backgroundColor: "red", fontSize: "30px", color: "white" }
//   },
//   "Hello Dear"
// );


const heads2 = React.createElement("h1",{id:"second",className:"Rahul",style:{backgroundColor:"black" , fontSize:"30px" , color:"white"}},"Hello Buddy");//mein yeh soch rha tha ki rohit bhaiya ki code mein toh sirf style handle krne wala code h na ki "id" , "classname" aur multiple attributes krne wala ; lekin react mein saaare properties ko handle krne wala code hota h jiske wajah se woh "id" , "classname" sabko handle krke run krwa sakta h.

const MainRoot = ReactDOM.createRoot(document.getElementById("root"));

MainRoot.render(heads1);// React aise hi kaam krta h jab bhi aap kisi element ko render krte h toh purana data uss related root ke delete kr deta h aur isko render krke output show krdeta h
MainRoot.render(heads2);//ab yha par "heads1" wale ko delete krdiya jaise hi humne heads2 wale ko render krdiya.

// ab hum toh chahte h dono heads ko use krna naa ki sirf ek toh hum yeh tareek use kr sakte h ki 
// do head lele <h1> and <h2> aur isko ek <div> mein daal le phir is single <div> ko MainRoot mein render krade , kyunki hum jaante h react sirf ek element leta h toh hum do element ko ek element ke andar wrap krke daal denge react ke root mein.
// { <div id="root">
//     <div>
//         <h1></h1>

//         <h2></h2>
//     </div>
// </div> }

//[heads1,heads2] children h same as [li1,li2,li3] children the "ul" ke
const div = React.createElement("div",{},[heads1,heads2]);
MainRoot.render(div);

// agar hum react mein aise code likhne lag jaye toh kitna aasaan ho jaayega 

// { <div>
//     <div>
//             <h1>
//                 Hello Dear Kaise ho
//             </h1>
//     </div>
// </div> }

// ab likh sakte h using JSX

// Javascript XML yeh react ka core part nahi h.
// JSX --> React mein isiliye available hain taaki hum HTML ke codes jaise "tags" aur baaki saare html ke code Javascript form mein naa likhte hue balki  direct HTML form mein likhe aur phir yeh usko js mein convert krdeta h.
// ex:- JSX vs JS
// HTML form mein easy h likhna React mein.
//  const element = <h1 className="title">Hello Buddy</h1>;

// Javascript form mein difficult hain likhna same html code , yeh jsx wale code ko apne aap internally convert kr deta h.
//  const element = React.createElement("h1", { className: "title" }, "Hello Buddy");


// Note: Yeh code abhi production-ready nahi hai.
// Production-ready code ka matlab hota hai ki aisa code jo directly server par deploy ho sake
// aur optimized ho taki fast response de. Abhi jo code likha hai usse response dene mein time lag sakta hai.
// React aur ReactDOM libraries ko hum isiliye use karte hain html file mein:
// 1. Yeh humara code read karke samajhti hain.
// 2. React aur ReactDOM apne internal logic (thousands of lines of code) ko use karke
//    humare likhe hue code ko process karti hain.
// 3. Fir woh processed code ko browser par render karwati hain.
// 4. Kyunki React aur ReactDOM ke andar bohot saara internal network aur logic hota hai,
//    is wajah se code execution aur response thoda slow lag sakta hai development mode mein.
// 5. Kya hum React/ReactDOM ki thousands lines of logic 
// apne file mein directly add kar sakte hain taaki library 
// ko call na karna pade? 
// Technically possible hai, lekin isse code bulky aur 
// lengthy ho jaayega, jo readability aur maintainability 
// dono ko kharab karega. 
// Library call ka time bach jaayega, but overall 
// performance optimization nahi hoga. 
// 6. Hum yeh kar sakte hain ki humara code React aur ReactDOM se
// sirf wahi logic le jo actual mein use ho raha hai. 
// Is tarah unnecessary thousands of lines execute karne ki 
// zarurat nahi hogi, aur sirf required code run hoga. 
// Upar se saaare unnecessary spaces aur codes jo humare code mein use  mein nahi h usko hata de , jitna compress apni file ko kar sakte h karein taaki jitna jyada optimize hoga utna fast response time hoga.
// Result → performance fast hogi aur execution time bachega.


// Yeh sab problems se bachne ke liye taaki humara code fast aur optimize ho jaaye isiliye hum use krte h
// Bundler 
// 👉 Bundler ek tool hai jo aapke saare alag-alag project files (JS, CSS, images, fonts, JSX code) ko combine + optimize karke ek aise form mein bana deta hai jo browser easily samajh sake aur fast load ho.
// ex:- Vite, WebPack , parcel , rollup etc.

// npm jisse hum node package manager kehte hain
// 🔹 NPM kya hai? 
// NPM ka matlab hota hai Node Package Manager.
// Ye ek tool hai jo Node.js ke sath aata hai.
// Iska kaam hai tumhare project me libraries ya packages ko install, update, remove aur manage karna.
// Javascript ke related saare code npm ke pass package ke form mein hote h
// Example: Agar tumhe React , React-dom ya Express , parcel , typescript compiler use karna hai, to wo tum NPM se install karoge ya agar bundler use krna h jaise parcel woh bhi install krsakte h.

// Commands
// npm init :- naya project start karega aur package.json file banayega (jo project ka saara information rakhta hai)

// npm install package-name:- koi bhi package (ex:-parcel) install karega project ke andar (local install)

// maanlo humne koi ghadi banayi h aur usse meine npm mein daaldiya toh koi aur uss ghadi ko use kr sakta h , npm uss ghadi ko package form mein dedega.

// jaise hi hum npm init krte h toh ab hum npm se package le sakte h aur woh package.json aur package-lock.json ko install krta h 
// aur npm install package name krke package install kr sakte h jaise npm install parcel se node modules package install ho jaata h
// iss node module ke andar multiple folders hote h including parcel
// multiple folders isiliye aata h parcel ke saath kyunki woh sab ek dusre par dependent rehte h hierachially jaise mujhe 
// Car (Main Package) ke liye engine chahiye 
// │
// └── Engine (Dependency) engine chalne ke liye fuel system chahiye
//     │
//     └── Fuel System (Sub-Dependency) fuel system run krane ke liye    petrol / diesel chahiye
//         │
//         │
//         └── Petrol/Diesel (Sub-Sub-Dependency)

// aise hi package run krane ke liye baaki sab folders chahiye toh woh sab node modules mein rehte h. kyunki jisne code likha hoga scratch se likha nahi hoga toh usne sab se code uthaya hoga aur phir thoda code likha ko integrate kr diya hoga isiliye yeh sab dependent hain ek dusre par.
// aur ab react & react-dom ke liye humein serial link add krane ki jarurat nahi h html file mein direct npm se install krasakte h , npm install react & npm install react-dom phir woh node modules mein aajayega.

// version 18.1.1
// ismein teen number hain 18.1.1 ---> pehle ko bolte h Major , dusre ko bolte h minor , teesro ko kehte h patch -> jab bhi patch ya minor update aata h toh function waise hi chalta h koi code fat ta nahi h
// 18 ---> Major , Jab developer apne package me aise bade changes kare jo purane code ke sath compatible na ho, usko Major Update bolte hain.
// Tumne React 17 ke rules ke hisaab se code likha.
// Phir React 18 (major update) aaya jisme naye rules apply ho gaye aur purane methods hata diye gaye.
// Tumhara code ab bhi purane (17 ke) rules use kar raha hai → isliye code fat jaata hai (errors aate hain).

// 1  ---> Minor , jab koi nayi functionality add krte h toh naya version aata h toh minor 0 se 1 hogya
// 1  ---> Patch , jab bug aata h aur usko solve krte h toh naya patch aata h toh patch 0 se 1 hogya


// Package.json 
// package.json ko pata h ki aapka project kis cheez par dependent hain jaise mera project react aur react-dom par dependent h aur uska version bhi note krke rakha h
//  ex:-    "parcel": "^2.13.3",
//          "react" : "^19.0.0",
//          "react-dom" : "^19.0.0"

// Caret (^) --> "react": "^18.3.1"
// React ka minimum version 18.3.1 chahiye.
// Lekin agar uske minor / patch updates aaye (jaise 18.3.2, 18.4.0), to wo bhi install ho jaayenge.
// Bas major update (19.x.x) automatic install nahi hoga, kyunki wo breaking change ho sakta hai.

//  Tilde ( ~ ) ---> "express": "~4.17.1"
// 👉 “Mujhe bas patch updates allow karo, minor aur major updates nahi.”
// Allowed ✅ → 4.17.2, 4.17.3 … (patch updates)



// Package-lock.json
// node module bohot bada file hota h aur upar se isko github mein push nahi krne k liye bola jaata h yeh delete bhi krdo toh wapas sirf npm install krdoge to install ho jaayega same version ke saath sabkuch kyunki install krte time woh pehle package-lock.json mein jaata h aur waha ka version dekhta ki waha kaunse version ka package h jaiase waha react 19.0.0 ka h toh node module mein bhi 19.0.0 ka install hoga ; maanlo agar galti se package-lock.json delete hogya tab kaise pata hoga ki kaunse version ka install krna hain agar dusra/latest version ka download karke usme code likhenge  toh code mein bohot error  aajaayega kyunki code purane version ke hisab se likhna h jo version uss time par package ka tha aur hum latest/dusre version mein likh rhe h
// ab jab package-lock.json delete ho gya h tab kaise pata chalega kaunsa version install krna h uske liye phir woh package.json dekhega jismein usse version mil jaayega par ismein yeh hoga ki agar usmein koi bhi minor updated version aaya hoga woh bhi install ho jaayega
// ex:- current package.json "parcel": "^2.12.3"
// reinstalling my node module and package-lock.json after getting minor update in parcel 
// "parcel": "^2.13.3"; kyunki yha caret(^) aur tilde(~) mention rhega package.json mein jiske wajah se woh minor/patch update ke saath lekar aayega.




           
































