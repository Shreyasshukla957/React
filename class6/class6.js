import React,{useState} from "react";
import ReactDOM from "react-dom/client"



function Counter (){

    // useState return krke array deta h
    // useState kya karta h jo value aapko UI mein display krana h usse internally khud DOM manipulation krke display kradeta h aapko khud jaakar DOM mein manipulation nahi krna padta hain
    //  ex:- document.getelementbbyid("count").innerHTML = `Count is:${count}` yeh kaam react ab khud krlega internally using useState 
    // useState aapko ek function bhi deta h aap uska kuch bhi naam rakhsakte ho jaise yha setCount name h. aur wahi function ke andar aapko apna element rakhna jisse aap display krana chahte h , yha ke scenario mein count h 
    // ex:- setCount(count);
    let [count,setCount] = useState(0);

    function increnum(){
        count=count+1;
        // SetCount ke andar jo data aapko display krana h woh daalne ka , aur woh bhi update hone ke baad jaise yha update hogya count+1 uske baad count ko SetCount ke andar daaloge toh latest value display krdeta h
        setCount(count);

        // react bolta h ki DOM manipulation tum mujhpar chhod do tum sirf UI par dhyan do 
        // document.querySelector("h1").innerHTML= `Count is:${count}`;


        console.log(count);

    }

    function decrenum(){
        if(count > 0)
        count=count-1;
        setCount(count);
        // document.querySelector("h1").innerHTML= `Count is:${count}`;

    }




    return (
        <div id="All">
        <h1>Count is: {count} </h1>
        <button onClick={increnum}>Increment {count}</button>
        <button onClick={decrenum}>Decrement {count}</button>

        </div>
    )
}

const MainRoot = ReactDOM.createRoot(document.getElementById("root"));

MainRoot.render(<Counter/>);