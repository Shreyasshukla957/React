import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client";


function Colourful ({name}){
    const [color,setColor] = useState("black");
    // jitne baar Main function re-render/run hota h utne baar naye memory allocate hote h isiliye const [color] mein naye naye values aajate h

    
    // line no :-1 wala padho theory

    console.log("render");
    console.log(name);

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

export default React.memo(Colourful);
// React.memo har jagah agar attach krne lagunga toh code ki complexity badh jaayegi  , kyunki react.memo bhi toh mein toh set of codes likhe honge isiko (overhead) kehte h jo ek command dete h ki iss Colourful function ko run na kre , aur hamesha react.memo ko use nahi krna chahiye , tabhi  React.memo  ko use kre jab code bada ho jisse run krane ki jarurat nahi h , chhota mota code h jisse kuch jyada faraq nahi pad rha h tab use krsakte h