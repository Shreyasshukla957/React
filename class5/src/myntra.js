import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import arr from "../utils/dummydata";

// Header
// Body
// Footer




function App() {
  return (
    <>
      <Header />

      <div id="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {
          arr.map((value, index) => (
            <Card key={index} cloth={value.Cloth} offer={value.Offer} />
          )) //direct object ke form mein pass nahi hota .map ke andar jsx error dedega usse nahi samajhaata h lekin yhi <card/> ke andar doge toh chal jaaeyga.
          // [<Card cloth={value.Cloth} offer= {value.offer}/>]
        }
      </div>


      <Footer/>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
