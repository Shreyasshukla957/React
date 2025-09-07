import React from "react";
import ReactDOM from "react-dom/client"






// Header
// Body
// Footer

function Card(props) {
    return (
        <div style={{border:"2px solid black"}}>
            <img src="https://images.unsplash.com/photo-1628972940339-6a4d9751c827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXxwMHJQRDlDQzRnNHx8ZW58MHx8fHx8" height="200px" width="200px" />
            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    );
}


const arr = [{Cloth:"Dhoti", Offer:"40-80%off"} ,
     {Cloth:"T-Shirts", Offer:"30-80%off"} ,
     {Cloth: "Pants", Offer:"30-50%off"} ,
     {Cloth: "Kurta", Offer:"20-60%off"} ,
     {Cloth:"Top", Offer:"10-30%off"} ,
     {Cloth:"Payjama", Offer:"50-80%off"} ,
     {Cloth:"Patloon", Offer:"10-20%off"} ,       
];


function App() {
    return (
     // Header
        // Body
        // Footer

        <div style={{display:"flex" , gap:"10px",flexWrap:"wrap"}}>
         
         {
            arr.map((value , index)=> <Card key={index} cloth={value.Cloth} offer={value.Offer} />) //direct object ke form mein pass nahi hota .map ke andar jsx error dedega usse nahi samajhaata h lekin yhi <card/> ke andar doge toh chal jaaeyga.
            // [<Card cloth={value.Cloth} offer= {value.offer}/>]
         }
            
        </div>

        

    );
}


const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);