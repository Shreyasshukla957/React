import React , {useState,useEffect,useMemo,useRef} from "react";
import ReactDom from "react-dom/client"
import Increment from "./increment";
import Decrement from "./decrement";
import GlobalContext from "./global";
import { useContext } from "react";


// function App(){


//     const [count , setcount] = useState(0);
//     // isse kehte h state lifting , ismein meine state variable ko ek common ancestor mein create kr diya jisse ab yeh state variable iss parent ke saare child mein use ho sakta h aur data bhejna bhi aasaan ho gya h


//     return(


//         <>
//         {/* .ab yha yeh hua parent ne toh use state (count,setcount)ko child mein bhej diya props ki madad se toh child bhi access kr sakta h , lekin agar yhi usestate child(increment) mein bnta tab parent nahi use kr paate aur maanlo ek aur child h increment jaisa (decrement) woh bhi use nahi kr paata agar child1(increment) mein state variable initialize ho toh  */}
//         <h1>Father Counter</h1>
//         <Increment counts={count} setcounts={setcount}/>

//         <Decrement counts={count} setcounts={setcount}/>
          
//         </>




//     )





// }

// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App/>)



// 1st Diagram about problem
//                     App (Parent)
//               ┌────────────────────┐
//               │  count (state)     │
//               │  setCount()        │
//               └─────────┬──────────┘
//                         │
//           props (count, setCount)
//                         │
//           ┌─────────────┴─────────────┐
//           │                           │
//           ▼                           ▼
//    Increment (Child)            Decrement (Child)
//  ┌──────────────────┐          ┌──────────────────┐
//  │ receives count   │          │ receives count   │
//  │ receives setCount│          │ receives setCount│
//  │                  │          │                  │
//  └──────────────────┘          └──────────────────┘


// cannot send data in this case state variable (count, setCount)
// ❌ Increment  ───X───►  Decrement   (NOT allowed)
// ❌ Decrement  ───X───►  Increment   (NOT allowed)
// ❌ Increment  ───X───►  Parent App   (NOT allowed)
// ❌ Decrement  ───X───►  Parent App   (NOT allowed)
// ❌ Children cannot modify App state directly


// ---------------------------------------------
// 2nd Diagram about solution 
/*
                ┌───────────────┐
                │   First.js    │
                │ (Parent)      │    
                │ count, setCount
                └───────┬───────┘
                        │
            ┌───────────┴───────────┐
            │                       │
    ┌───────▼───────┐       ┌───────▼───────┐
    │  second.js    │       │  fourth.js    │
    │ (Child)       │       │ (Child)       │
    └───────┬───────┘       └───────────────┘
            │
    ┌───────▼───────┐
    │   third.js    │
    │ (Child)       │       (Props Drilling from
    └───────┬───────┘       first.js to fifth.js)
            │
    ┌───────▼───────┐
    │   fifth.js    │   
    │ (Child)       │
    └───────────────┘

    Here the biggest flaw is even if the third.js doesn't need the props still it will be transferred to him because if fifth.js need the props that's the only way to send it to fith.js through third.js.
    agar humne props bhej bhi diya isi tarah se aur props par updation humne kiya toh woh update hokar source matlab first.js ke pass jaayega jiske wajah se saare files jismein props the woh sab files render honge (ex:- third.js ) aur upar se third.js ko toh need bhi nahi h props ka phir bhi 

FLOW EXPLANATION (IMPORTANT):
----------------------------
- First.js is the ONLY owner of state (count, setCount)
- Data flows DOWNWARD only (parent → child)
- second.js receives props from First.js
- third.js receives props from second.js
- fifth.js receives props from third.js
- fourth.js also receives props directly from First.js

RULES:
------
❌ Children cannot send data back to parent directly
❌ Siblings cannot communicate directly
✅ Single source of truth stays in First.js

*/
// --------------------------------------------------------
// 3rd diagram of best solution
// Props Drilling se bachne ka tareeka
// Props drilling se bachne ke liye hum useContext + createContext use karte hain.
// Ek global file (global.js) banate hain jisme state store hoti hai.
// Is file ko Context Provider ke through wrap kar dete hain,
// aur koi bhi component direct data le sakta hai bina parent-child chain ke. 
/*
                    ┌─────────────────┐
                    │   global.js     │
                    │ (Context Store) │
                    │ count, setCount │
                    └────────┬────────┘
                             │
        ┌────────────────────┼────────────────────┐
        │                    │                    │
┌───────▼───────┐    ┌───────▼───────┐    ┌───────▼───────┐
│   First.js    │    │  second.js    │    │  fourth.js   │
│ (Consumer)    │    │ (Consumer)    │    │ (Consumer)  │
└───────┬───────┘    └───────┬───────┘    └──────────────┘
        │                    │
┌───────▼───────┐    ┌───────▼───────┐
│   third.js    │    │   fifth.js    │
│ (Consumer)    │    │ (Consumer)    │
└───────────────┘    └───────────────┘


KEY POINTS:
-----------
✅ Sab components direct global.js se data le rahe hain
✅ Props drilling completely removed
✅ No parent → child dependency
✅ Cleaner & scalable architecture
*/



// after providing data to globalcontext and wrapping the child(Increment,Decrement) indside globalcontext 
function App(){


    const [count , setcount] = useState(0);
    // isse kehte h state lifting , ismein meine state variable ko ek common ancestor mein create kr diya jisse ab yeh state variable iss parent ke saare child mein use ho sakta h aur data bhejna bhi aasaan ho gya h


    return(


        <>
    
        {/* props ke through abhi tak mein bhej rha tha iske childrens ko phir woh log yahi props bhej rhe the apne respective children ko , iss bachne k liye globalcontext create kiye global.js file mein */}
        {/* ab mein iss state variable (count,setcount) ko globalcontext ke andar daalunga aur apne children ko wrap krdunga isse fayda yeh hoga , increment aur decrement ke childrens ko bhi automatically accessible ho jaayega bina incrment aur decrement ko apne children ko props ke through bheje yhi fayda h globalcontext ka ek origin file jiska data sabhi log istemaal krsakte h */}

        {/* ab yeh state variable globalcontext ke andar chale gaye through globalcontext.provider aur jo pehle ka data hoga globalcontext ke andar woh erase ho jaayega aur yeh data sab children use kr sakte h */}
        {/* wrap kr diya increment aur decrement ko globalcontext ke andar woh woh bhi use kr sakte h , unke children bhi aur unke children bhi ,goes on pura lineage use kr sakta h iss data ko bas import krana h apne file mein global context aur usecontext ko  */}
        {/* value keyword ke andar hi bhej sakta hu aisa kuch dikhega*/}

        {/* global context ke andar state varibale global file chhodakar yaha iss liye daala kyunki yaha state variable render hoga toh update hoga aur wahi updated child ke andar jaayega global file mein daalta toh updated nahi jaata same hi value jaati  */}
       <GlobalContext.Provider value={{count,setcount}}>
        <h1>Father Counter</h1>
        {/* ab is tarah props bhejne ki need nahi h */}
        {/* <Increment counts={count} setcounts={setcount}/> */}
        {/* <Decrement counts={count} setcounts={setcount}/> */}
        <Increment/>
         <Decrement/>
        
          </GlobalContext.Provider>
        </>




    )


}
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App/>);



     //    <GlobalContext.Provider value={{count,setcount}}></GlobalContext.Provider>

      {/* value keyword ke andar hi bhej sakta hu aisa kuch dikhega*/}

        {/* <GlobalContext.Provider
        value={{
        count,
        setCount,
            }}>
                {children}
            </GlobalContext.Provider> */}





   
















