import React , {useState,useEffect,useMemo,useRef} from "react";
import ReactDom from "react-dom/client"
import Decrement from "./decrement";
import Incrementtwo from "./increment2";
import GlobalContext from "./global";
import { useContext } from "react";
// export default function Increment(props) {

    
//   return (
//     <>
//       <h1>COUNT IS : {props.counts}</h1>
//       <button onClick={() => props.setcounts(props.counts + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }

// OR using destructure 

// export default function Increment({ counts, setcounts }) {
//   return (
//     <>
//       <h1>COUNT IS : {counts}</h1>
//       <button onClick={() => setcounts(counts + 1)}>
//         Increment
//       </button>
//     </>
//   );
// }



// destructure krne se destructre hua variable aur normal case mein obj.key dono value hold krte h
// 👉 count === obj.count
// const obj = { count: 5 };
// const { count } = obj;

// console.log(count);     // 5
// console.log(obj.count); // 5


// after using gloablcontext
export default function Increment() {

    // const [count , setcount] = useState(0);
    const data = useContext(GlobalContext);
  return (
    <>


      <h1>COUNT IS : {data.count}</h1>
      <button onClick={() => data.setcount(data.count + 1)}>
        Increment
      </button>

      

      {/* <Decrement/> ab agar mein yeh sochu ki mein aisa krdu increment ke andar decrement call krdu jisse increment se data mein decrement mein bhejdu through props toh yeh galat h isse 2 decrement aajayega UI mein ek jo parent ne call kiya hoga aur ek jo yha call hua h , aur upar se yaha wala decrement toh iska child ban jaaeyega naa ki sibling rhega  */}

      <Incrementtwo/>
    </>
  );
}
