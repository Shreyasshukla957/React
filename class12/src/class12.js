import React from "react";
import ReactDom from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Home from "../components/Home";
import Dashboard from "../components/Dashboard";
import Main from "../components/main";
import Contact from "../components/Contact";
import Cdata from "../components/Cdata";
import Cdata2 from "../components/Cdata2";
import Cdata3 from "../components/Cdata3";

/*
  <BrowserRouter>
  ----------------
  - React Router ka main wrapper
  - URL ko listen karta hai
  - Routing related sab cheezein isi ke andar likhte hain
    (Routes, Route, Link, NavLink)
  - Page reload nahi hota (SPA behavior)
*/

/*
    <nav>
    -----
    - Normal HTML navigation container
    - Sirf links ko group karta hai
    - Routing ka kaam nav nahi karta
  */

/*
      <Link>
      ------
      - React Router ka navigation tool
      - URL change karta hai without page reload
      - "to" me path dete hain
    */

//      "/" path → Home component
//      <Link to="/">Home</Link>

//      "/Dashboard" path → Dashboard component
//      <Link to="/Dashboard">Dashboard</Link>

/*
    <Routes>
    --------
    - URL ko check karta hai
    - Decide karta hai kaunsa component render hoga
  */

//    Root URL ( / ) → Home component
//    <Route path="/" element={<Home />} />

//     /Dashboard URL → Dashboard component
//     <Route path="/Dashboard" element={<Dashboard />} />

// BrowserRouter → routing environment
// nav           → navigation container
// Link           → URL change (no reload)
// Routes         → route matching logic
// Route          → URL ↔ Component mapping

function App() {
  return (
    // Routing krane ke liye saare property ko <BrowserRouter> ke andar hi wrap krana h , yhi url ko listen bhi krta h
    <BrowserRouter>
      {/* Jaise hi iss Home par click krenge woh hume url mein "/" page par le jaayega ya yeh bol sakte h woh page load krdega , uska reason yeh h actually mein ki  humne jo Route mein path="/" jis file ke saath map kiya h iss case mein Home h (Home.js) woh load krdeta h , yhi iss link ka kaam h , aur nav html ka tag ek container h jo inn saare link ko collect krke rakhta h  */}

      {/* link wala section bhi har page par present rehta h kyunki yeh routes ke andar nahi h  */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Contact"> Contact</Link>
      </nav>

      {/* Browser ko check krke match krta h aur uss route ko dhundh kar usse related page ko render kradeta h help of D.O.M manipulation  */}
      <Routes>
        {/* route path aur Js file / page ko connect kr de rha h agar iss case mein dekhe toh agar url mein website ka naam ke aage 
         "/" krdenge toh Home page khul jaayega aur agar wahi website ke naam ke aage "/Dashboard" kr denge toh Dashboard ka data page par load ho jaayega ,React Router page reload nahi krwata bas naye content ko load krdeta h page ek hi rehta h isiliye isko Single Page Applictaion (SPA) bolte h , inshort url mein jis path ko daalenge woh usse connected uss page ko render krwadega */}

        {/*  by default Routes ke andar jo component(iss case min Route) load hota hai, woh previous wala erase/unmount ho jaata hai , uska UI aur local state remove (erase) ho jaata hai.
         */}
        <Route path="/" element={<Home></Home>}></Route>

        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>

        {/*  yha par  nav link bhi iske andar daaldiya h  toh yeh link har page par nahi dikhayega sirf uss waqt  dikhayega jaise hi url mein /Main likhunga , Main page load hoga aur uske saath yeh link bhi load/dikhne lagega yha par    */}
        <Route
          path="/Main"
          element={
            <>
              <nav>
                <Link to="/Main">Main</Link>
              </nav>
              <Main></Main>
            </>
          }
        ></Route>

        {/*Root file ko hamesha react-router starting se dhoondhta h toh agar children/nested file mein "/" lagne lagega toh react-router usse starting se dhoondhne lagega , lekin children file jo hoti h woh toh nested hoti h toh woh starting mein nahi milega isiliye yeh , Nested Route ka rule yaad rakhna jo root file hoti h jaise Contact  , Home , Dashboard yha par h yeh sab ka start "/" se hota h ,lekin iske andar ki nested file hoti h woh bina "/" ke hoti h bas direct name aata h jaise yha par "Cdata2" aur jo nested/children file ka data apne root file ke saath display krana hota h usmein path nahi dete h bas "index" likh dete h jaise yha
         "/Contact" ek root file h aur uske page par uske saath uske ek nested file ka data display krna h toh dekh sakte h "Cdata" ka path ke jagah par "index" likha hua h */}
        <Route path="/Contact" element={<Contact></Contact>}>
          <Route index element={<Cdata />}></Route>
          <Route path="Cdata2" element={<Cdata2 />}></Route>
           <Route path="Cdata3" element={<Cdata3 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />);

// Routing ka matlab hota hai URL ke hisaab se alag-alag UI / page dikhana — bina page reload ke.
// Router:
// Browser ke URL ko observe karta hai
// URL change hota hai (/, /contact, /profile)
// Saare Routes se match karta hai
// Jo Route match hota hai →
// Uska component render karwa deta hai
// Route: ek rule hota hai jo batata hai: “Agar URL yeh ho → toh yeh component dikhao.”

// Routing ki madad se hum bina page reload kiye single page application (SPA) me
// multiple pages ka data render kar sakte hain.
// Har route ka ek path hota hai jo key ki tarah kaam karta hai,
// aur jaise hi path match hota hai, us route se linked component (data)
// turant screen par render ho jaata hai.
// Path = key 🔑 | Component = data 🚪
// Key match hui → data open ho gaya without reload.





