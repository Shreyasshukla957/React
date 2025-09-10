import React,{useState} from "react";
import ReactDOM from "react-dom/client"



function Counter (){
    // Hooks ek function hain aur bohot types of hooks hote h usmein sabse jyada use hone wale mein se ek h 'useState'
    // jab bhi data change hota h toh hum kehte h state change ho gyi jaise count ki value 0 se 1 se 2 se 3 change ho rhi h toh state change ho rha h
    // useState return krke array deta h yha [count , setCount] dega
    // useState jo value change ho rha h ya state change ho rha h jaise yha 'count' ho rha h usse jaakar UI mein display kradega
    // useState kya karta h jo value aapko UI mein display krana h jaise 'count' usse internally khud DOM manipulation krke display kradeta h aapko khud jaakar DOM mein manipulation nahi krna padta hain
    //  ex:- document.getelementbyid("count").innerHTML = `Count is:${count}` yeh kaam react ab khud krlega internally using useState 
    // useState aapko ek function bhi deta h aap uska kuch bhi naam rakhsakte ho jaise yha setCount name h , aur useState(0) ka '0' jo h woh chla jaayega count ke andar , aur woh function isiliye laakar deta h ki jab bhi aapka variable/state change hojaaye jaise yha increment/decrement ke baad count jo ki initialized by '0' h woh change hoga toh uske baad aapko woh function setCount use krna h aur jo variable change ho rha h 'count' usko uske andar daalna h
    //  setCount(count) , isko call krdega  woh isse hoga yeh ki jo kaam hum DOM manipulation krne se kr rhe the UI par visible krane ka woh yeh setCount krdega 'count' ko visible krake
    // ex:- setCount(count);
    let [count,setCount] = useState(0); //useState mein jo value initialize krenge waha se chalu hota h counting yha '0' se chalu hoga '10' krdiya toh '10' se chalu ho jaayega

    function increnum(){
        count=count+1;
        // SetCount ke andar jo data aapko display krana h woh daalne ka , aur woh bhi update hone ke baad jaise yha update hogya count+1 uske baad count ko SetCount ke andar daaloge toh latest value display krdeta h
        setCount(count);
        // setCount kaam kaise krta h 
        // sabse pehle andar aate h tab useState(0) , useState ki value '0' hoti h
        // '0' ko count ke andar daal dega useState
        // phir har jagah jaha jaha {count} use kiya h waha UI mein '0' display kradega 'h1' se lekar <button> tak
        // onclick use krke increment wale button par click hoga jisse count ki value 0 --> 1 ho gyi
        // uske baad jab increment wala function call hoga jismein setCount(count) wala function call hoga kyunki count toh update hogya 'increnum' function chle ne wajah se count = count + 1 toh ab count ki value 1 hogyi
        // toh hoga yeh setCount(count) wala function wapas se Counter wla function jo main function hain usse call krega aur phir sabse pehle 
        // useState(0) se useState(1) bn jaayega kyunki setCount(count) mein 'count' ke andar '1' aur woh useState ke andar chla jaayega aur phir jaha jaha {count} use ho rha h woh UI mein count ki value display ho jaayegi jo ki hogi '1' aur aise hi chlta rhega 
        // increment aur decrement dono k liye

        // react bolta h ki DOM manipulation tum mujhpar chhod do tum sirf UI par dhyan do 
        // document.querySelector("h1").innerHTML= `Count is:${count}`;


        console.log(count);

    }

    function decrenum(){
        // if(count > 0) agar 0 ke neeche nahi jaana 
        count=count-1;
        setCount(count);
        // setCount(count+1); bhi chlega kyunki algorithm hi aisa h ki yhi value setState ke andar jaayega setState(count+1) 
        // document.querySelector("h1").innerHTML= `Count is:${count}`;

    }


        {/* button par bhi agar hum chahte h ki display kre ki count ki value kya h jaise 'h1' mein dikha rha h (Count is : 0) , toh button par bhi humein DOM manipulation krana padega 
        document.getelementbyId("button").innerHTML = {count}
        lekin react bolta h ki tum DOM manipulation mujhpar chhod do aur UI par dhyan do isiliye woh lekar aaya  useState jo ki part hain hooks ka , useState bolta h ki tum mujhpar chhod do DOM manipulation krake display krana , UI mein display mein kradunga */}

    return (
        <div id="All">
        <h1>Count is: {count} </h1>
        {/* button par bhi UI par visible kradiya useState ne count ko , bina button mein DOM manipulation kraye ek baar 'useState' ko intialize krado aur kahi bhi use kro woh value show krdega */}
        <button onClick={increnum}>Increment {count}</button>
        <button onClick={decrenum}>Decrement {count}</button>

        </div>
    )
}

const MainRoot = ReactDOM.createRoot(document.getElementById("root"));

MainRoot.render(<Counter/>);