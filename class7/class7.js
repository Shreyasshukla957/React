// Theory
// maan lete h meine red wale button par click kiya toh mera body ka bgc red ho jaayega kyunki function re-render ho kar chlega aur backgroundColor red ho jaayega , meine wapas red button par click kiya wapas usne 're-render' krdiya aur red hi rha jo pehle the , toh yeh ek dikkat h agar mere page ka bgc already red h toh dusre baar red button par click krne par usko function re-render nahi krna chahiye , kyunki myntra wale project mein jab Set(A) check kiya tha toh usne dekha tha mera array ka reference toh same h toh usne chlne nahi diya tha andar ka data sort hogya tha par same array mein hi sort hua tha toh 'SetA' toh A ka reference store kiya tha jo ki same tha isiliye usne chalne  nahi diya kyunki usko update nahi dikha jabki andar ka value update/change hua tha same array hone ke wajah se reference same tha kyyunki non-primitive datatype ka address store hota h stack mein toh ek bhi mauka nahi milta h non-primitve walon ko lekin primitive walon ko ek mauka dete h matlab ek baar re-render krne dete h although koi update nahi hota h same value store rehti h , jaise yha 2 baar red button par click krne par function re-render kiya isiko "bail-out" kehte h 3ri baar se band krdeta h aur jabki non-primitive walon ko toh ek hi baar re-render krne deta h dusri baar usko changes nahi mile toh re-render nahi krta h.

import React,{useEffect, useState} from "react";
import ReactDOM from "react-dom/client"


// Background Color Changer
// setColor("color") color:- red , ornage , blue , green , pink
//  jab chalta h toh woh re-render krta h matlab function wapas chalata h

function Main (){


    const [color,setColor] = useState("black");
    // jitne baar Main function re-render/run hota h utne baar naye memory allocate hote h isiliye const [color] mein naye naye values aajate h

    
    // line no :-1 wala padho theory

    console.log("render");

    // useEffect function sabse last mein execute hota hain pura Main function run hojaata h uske baad sabse last mein clg("Render") aur clg("Second") pehle print ho jaayega last mein clg("UseEffect Executed") print ho jaayega uske baad useEffect function mein jo callback function h woh run hoga

    // useEffect (Callback function , dependency)
    // useEffect mein do chhezein daalte h Callback function aur dependency
    // dependency hum isko dete h , jaise yha color diya h
    // pehli baar mein yeh chlegi lekin dusri baar mein yeh tabhi chlti h agar dependency ki value change ho jaise yha dependency --> color h toh agar color ki value change nahi hui toh 2ri baar mein nahi chlegi jaise 1baar red color daba diya toh chlgyi bhale hi last mein chli par chalti h lekin 2ri baar wapas red dbaya toh nahi chlegi kyunki dependency ki value change nahi hui 1baar mein bhi red tha 2ri baar mein bhi red hi tha , isiliye 2ri baar mein nahi chali yahi "bail-out" jo primitve data ka ek problem tha usse defend krne k liye kaam aati h.
    // agar dependency khaali hua  ,[] toh sirf 1st time chlega rendering ke ,matlab kabhi chlega hi nahi kyunki khaali h toh kuch change hi nahi hua toh chlega hi nahi siwaaye 1st time rendering ke.
    // aur agar galti se dependency hi nahi bnaya tab toh har baar chlega phir toh useEffect ka koi matlab hi nahi hua
    useEffect(()=>{
        console.log("UseEffect Executed");
        document.body.style.backgroundColor = color;
    },[color]);


    console.log("second");

    return(
        <>


        <h1> BGC Changer </h1>


        <button style={{backgroundColor: "red" , border : "none" , borderRadius : "8px" , color:"white" }} onClick={()=> setColor("Red")}>Red</button>

        <button style={{backgroundColor: "Orange" , border : "none" , borderRadius : "8px" , color:"white"}} onClick={()=> setColor("Orange")}> Orange</button>

        <button style={{backgroundColor: "Blue" , border : "none" , borderRadius : "8px" , color:"white"}} onClick={()=> setColor("Blue")}> Blue</button>

        <button style={{backgroundColor: "Pink" , border : "none" , borderRadius : "8px" , color:"white"}} onClick={()=> setColor("Pink")}> Pink</button>
        
        <button style={{backgroundColor: "Green" , border : "none" , borderRadius : "8px" , color:"white"}} onClick={()=> setColor("Green")}> Green</button>



        </>

    )



}

const Root = ReactDOM.createRoot(document.getElementById("root"));


Root.render(<Main/>);