import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import arr,{jaadugar} from "../utils/dummydata";

// Header
// Body
// Footer




function App() {

  let[A,setA] = useState(arr);

  function SortCloth (){

    A.sort((a,b)=>  a.Price - b.Price); //ascending ke liye
    // arr.sort((a,b)=>  a.Price - b.Price); descending ke liye
    setA([...A]);//yeh isiliye kiya kyunki react ko laga ki kuch updation/changes nahi hue h kyunki array reference se store hota h aur refernece toh same h yha isiliye [...A] aisa krdiya iska matlab naye array mein A ke saare element store ho gye h rest operator use krke .
    // ex:- ke liye samjho
    // A = [1,2,3]
    // const B = [...A]; // B =[1,2,3] hi hua par dono alag address par rhenge data andar ka same rhega isse yeh lagega react ko ki address change hua toh kuch change hua toh woh phir updated bhejdega react ko updation dikhna chahiye
    
  }

  function filterPrice (){

    const B = A.filter((val)=> val.Price > 499 );
    B.sort((a,b)=>  a.Price - b.Price); //ise filter wale bhi ascending order mein lag jaayenge
    setA([...B]);

  }


  return (
    <>
      <Header />
      

      <button id="Sort"  onClick={SortCloth}> Sort by Price</button>
      <button id="Sort"  onClick={filterPrice}> Filter by Price</button>


      <div id="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
        {
          A.map((value, index) => (
            <Card key={index} cloth={value.Cloth} offer={value.Offer} Price={value.Price} />
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
