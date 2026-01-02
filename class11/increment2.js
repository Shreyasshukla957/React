
import GlobalContext from "./global";
import { useContext } from "react";
import React , {useState,useEffect,useMemo,useRef} from "react";
import ReactDom from "react-dom/client"
import Decrement from "./decrement";

// a

// export default function Incrementtwo(props) {
//     // usecontext ka kaam h globalcontext se data nikal kar const data mein daal dena
//     const data = useContext(GlobalContext)
//     console.log(typeof data);//it is an object because globalcontext is an object
//   return (
//     <>
 
//     {/* <h1>   My name is {data.name} </h1> */}
//     {/* yeh data meine global file se uthaya h naa ki class11.js se props ki tarah , kyunki usmein props drilling hota */}

//     {/* ab mein globalcontext ka data (count,setcount) use krsakta hu  */}
    
//     </>
//   );
// }



// after using gloablcontext
export default function Incrementtwo() {

    // baaki jagah meine object ke andar store karaya h toh obj.key ke form mein access kr rha tha issbaar 
    const data = useContext(GlobalContext);
    // iss tarah se agar mein data store karaunga tph data.count krke use krna padega aur 2nd option mein 
    // isko iss tarah se bhi mein use kr sakta hu
    const {count,setCount} = useContext(GlobalContext);

  return (
    <>
 

    {/* ab mein globalcontext ka data (count,setcount) use krsakta hu kyunki woh globalcontext.provider ne  */}
    {/* dono tarh se use krsakte h , depend usecontext ko store kaise kraya h */}
    <h1>Incrment ka child data.count{data.count}</h1>
    <h1>Incrment ka child count{count}</h1>
    
    </>
  );
}