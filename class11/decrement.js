import React , {useState,useEffect,useMemo,useRef} from "react";
import ReactDom from "react-dom/client"
import GlobalContext from "./global";
import { useContext } from "react";


// export default function Decrement(props) {

 

//     // const [count , setcount] = useState(0);
    
//   return (
//     <>
//     {/* ab yha se toh mein state variable ko parent mein nahi bhej sakta naa hi iske sibling(decrement) ko bhej sakta hu , jaise parent function App ne mujhe(increment) ko bheja tha */}
//       {/* <h1>COUNT IS : {props.counts}</h1> */}
//       {/* <button style={{margin:"12px"}} onClick={() => props.setcounts(props.counts - 1)}>
//         Decrement
//       </button> */}
//     </>
//   );
// }


export default function Decrement() {

 

    // const [count , setcount] = useState(0);
    const data = useContext(GlobalContext);
  return (
    <>

 
      {/* ab globalcontext ka data use kr sakte h import kra liya h */}

        <h1>COUNT IS : {data.count}</h1>
          <button style={{margin:"12px"}} onClick={() => data.setcount(data.count - 1)}>
        Decrement
      </button>
    </>
  );
}