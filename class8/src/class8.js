import React, { use, useCallback, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

function PasswordGenerator() {
  // yeh chaaro state variable iss function PasswordGenerator ko call krte h through setPassword , setlength , setnumberchange , setcharacterchange .
    // setPassword , setlength , setnumberchange , setcharacterchange yeh sab ek hi baar create hote h naaki baar baar create hote h
  const [Password, setPassword] = useState("");
  const [length, setlength] = useState(10);
  const [numberchange, setnumberchange] = useState(false); //true agar krdunga toh default check ho jaayega.
  const [characterchange, setcharacterchange] = useState(false); //true agar krdunga toh default check ho jaayega.

    const generatepassword = useCallback(()=>{

        let str = "abjdjkanjfjsdfkjsndfSKNFKJKJKJFNLFNDJFF";
    if (numberchange) {
      str += "1435786174256726782148910";
    }

    if (characterchange) {
      str += "$%^&*(@#!&*()#~_-?><{}[]|:";
    }

    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length)];
    }

    setPassword(pass); //yeh setPassword re-render krwata h function ko
    
    // generatePassword function ko jab-jab call kiya jaata hai,
    // tab har baar uske andar naye variables, objects aur logic
    // memory mein create hote hain.
    //
    // PasswordGenerator component ke andar jo states hain
    // (length, numberChange, characterChange),
    // unki updated value generatePassword ko chahiye,
    // kyunki password inhi values ke base par generate hota hai.
    // Agar yeh updated na ho, toh password galat generate hoga.
    //
    // Lekin 'password' state ki value ka generatePassword ke
    // logic mein directly koi use nahi hai.
    // Isliye har render par generatePassword ka
    // naya function banana unnecessary hai
    // aur yeh extra memory / performance cost create karta hai.
    //
    // Is problem ko avoid karne ke liye hum chahte hain ki
    // generatePassword function sirf tabhi re-create ho
    // jab length, numberChange ya characterChange change ho.
    //
    // Isi purpose ke liye React hume `useCallback` hook deta hai,
    // jo function ko memoize kar deta hai
    // aur bina dependency change hue usko dobara create nahi karta.

    // [length, numberchange, characterchange] yeh teeno  usecallback hook ki dependency h , yeh tabhi run hoga jab inn teeno ke value mein changes aayegi
    },[length, numberchange, characterchange])

//   function generatepassword() {
    

//   }

  useEffect(() => {
    generatepassword();
    // console.log((String(length).length)); // yeh isiliye meine kiya check krne k liye ki kya page first time render ho rha h toh length change ho rha h
    // dependency mein [empty array] diya h isiliye sirf ek baar generatepassword() chelga
    // lekin ab dependency mein length daal rhe h taaki length change hone par generate password wala chle aur woh bhi tab chelga jab length change hoga same rhega toh nahi chlega
  }, [length, numberchange, characterchange]);

  return (
    <>
      <h1>Password is : {Password} </h1>
      <div>
        {/* yha par input ki value same as length hai '10' par minimum 5 jaa sakta h aur jaise hi , value change hui turant woh value length ki value bhi bn jaayegi bcoz of e.target.value */}
        {/* range ki minimum or maximum value rakhi jaa sakti hain */}
        <input
          id="input1"
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(event) => setlength(event.target.value)}
        ></input>
        <label>Length is: {length}</label>

        {/* defaultchecked ki by default value false di h jisse yeh dono ticked nahi h , true krna par automatically screen par tick dikhayega */}

        <input
          type="checkbox"
          defaultChecked={numberchange}
          onChange={() => setnumberchange(!numberchange)}
        ></input>
        <label>Number</label>

        <input
          type="checkbox"
          defaultChecked={characterchange}
          onChange={() => setcharacterchange(!characterchange)}
        ></input>
        <label>Character</label>
      </div>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<PasswordGenerator />);
