// Theory
// maan lete h meine red wale button par click kiya toh mera body ka bgc red ho jaayega kyunki function re-render ho kar chlega aur backgroundColor red ho jaayega , meine wapas red button par click kiya wapas usne 're-render' krdiya aur red hi rha jo pehle the , toh yeh ek dikkat h agar mere page ka bgc already red h toh dusre baar red button par click krne par usko function re-render nahi krna chahiye , kyunki myntra wale project mein jab Set(A) check kiya tha toh usne dekha tha mera array ka reference toh same h toh usne chlne nahi diya tha andar ka data sort hogya tha par same array mein hi sort hua tha toh 'SetA' toh A ka reference store kiya tha jo ki same tha isiliye usne chalne  nahi diya kyunki usko update nahi dikha jabki andar ka value update/change hua tha same array hone ke wajah se reference same tha kyyunki non-primitive datatype ka address store hota h stack mein toh ek bhi mauka nahi milta h non-primitve walon ko lekin primitive walon ko ek mauka dete h matlab ek baar re-render krne dete h although koi update nahi hota h same value store rehti h , jaise yha 2 baar red button par click krne par function re-render kiya isiko "bail-out" kehte h 3ri baar se band krdeta h aur jabki non-primitive walon ko toh ek hi baar re-render krne deta h dusri baar usko changes nahi mile toh re-render nahi krta h.

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Colourful from "./components/colourful";

// Background Color Changer
// setColor("color") color:- red , ornage , blue , green , pink
//  jab chalta h toh woh re-render krta h matlab function wapas chalata h

function Main() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div id="counter">
        <h1>Counter is: {count}</h1>
        {/* jab hum button par click krenge toh woh count badhate jaayega kyunnki button click krte h setCount ki value count+1 krte h woh update value useState(count+1) mein chale jaayegi aur phir jaha jaha count code mein use hoga toh woh UI mein display hoga , upar se jaise hi button par click krenge setCount re-render krdega pure function ko matlab saare instruction chalta h button click krne par iska matlab main funcion mein <Colourful/> function ko bhi call kiya h toh woh bhi chlega na  */}
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>

    {/* colourful function call kiya h toh woh bhi chlega jaise hi "main function" chlega/ re-render hoga bcoz of clicking the button kyunki setCount laga h toh woh re-render "main function" ko krta h iske wajah se saare instruction "main function" ki run hoti h , aur usmein mein se ek <Colourful/> function call hain */}

    {/* colour function mein React.memo use krne par colourful function run nahi hoga jab Main function run hoga warna pehle Main function ke saaath colourful function bhi pura run ho rha tha (console) mein dekhoge browser ke tab pta chlgea  (render , second) dono print ho rha tha jiska commnad colourful function mein define kiya h, lekin React.memo colourful export krne ke baad yeh dono run nahi ho rhe h ,iska matlab colorful function call nahi ho rha h Main function run hone par*/}
      <Colourful name="funny" /> 
      {/* agar is argument/props name ki value funny se change hokar colourful function ke andar  kuch aur hojaaye example hunny toh react.memo attach krne ke bawjood bhi yeh colourful function call hoga aur run hoga  */}

    {/* <Colourful name={count} /> */}
     {/*yha par colourful function call bhi hoga aur chlega bhi kyunki argument/props mein change hote rehne wali value {count} bheja jaa rha aur woh colourful function ke andar use bhi ho rha h upar se {count}  jo h woh change hote rhegi isiliye react.memo colourful ke saath attach krne ke bawjood ,  colourful function call bhi hoga aur run bhi hoga , kyunki props wali jo value h change bhi ho rhi h aur upar se usage mein bhi h colourful function mein   */}


    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));

Root.render(<Main />);
