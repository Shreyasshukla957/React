import React, { useEffect, useState , useMemo } from "react";
import ReactDOM from "react-dom/client";



// useMemo hook
// 1.counter button : increase
// 2: Input field : fibonnaci number

// isko bahar bnayenge toh fayda yeh h ki re-render baar baar nahi hoga ab yeh global scope mein bn gya h toh ek baar hi render hoga , kyunki .render mein <App/> ko daala h aur fibonnaci function toh ab function App ka part nahi h toh render nahi hoga bas woh tab chlgea jab uske number milega , hum useglobal hook ka bhi use kr sakte h woh bhi yeh kaam krsakta h re-render tabhi krwayega jab number change ho jaye
 function fibonnaci(n){

        if(n<=1){
            return n;
        }
            

        return fibonnaci(n-1)+fibonnaci(n-2);
        // this is recursive code and this method/formula of displaying output of fibonnaci number takes too much of time because of high complexity , this results in websites responsing too slow
        

    }

function App (){

    let [count,setcount] = useState(0);
    let [number,setnumber] = useState(0);
    // let [result,setresult] = useState(0);
   
    
    // function fibonnaci(n){

    //     if(n<=1){
    //         return n;
    //     }
            

    //     return fibonnaci(n-1)+fibonnaci(n-2);
    //     // this is recursive code and this method/formula of displaying output of fibonnaci number takes too much of time because of high complexity , this results in websites responsing too slow
        

    // }

   let result = useMemo(() => {
   return fibonnaci(number);
  }, [number]);
    // usememo bhi useeffect ki tarah data store krke rakhta  h aur tabhi useMemo ka callback function run hota h jab dependency [number] mein changes ho .


// ✅ Best approach: useMemo
// useMemo render ke time value calculate karta hai
// result React memory mein cache ho jaata hai
// sirf tab dobara calculate hota hai jab `number` change ho
// count change hone par fibonnaci dobara run nahi hota
// koi extra re-render nahi hota
// isliye derived / expensive calculation ke liye useMemo best hai
    
    
//     let result=0;

// useEffect(() => {
//     result =  fibonnaci(number);
//   }, [number]);

// ❌ Galat approach: normal variable + useEffect
// reason 1: result normal variable hai, React isko track nahi karta
// reason 2: har re-render pe `result = 0` wapas reset ho jaata hai
// reason 3: useEffect sirf tab chalta hai jab `number` change ho agar kisi aur state (jaise count) se re-render hua, to useEffect run hi nahi hoga
// reason 4: useEffect render ke baad last mein chalta hai aur , normal variable change karne se re-render trigger nahi hota , net result: UI mein result inconsistent / galat dikhega


// ⚠️ Workable but not ideal approach: useState + useEffect
// isme result ko state mein store karte hain
// useEffect ke andar setResult(fibonnaci(number)) call hota hai
// ye sahi kaam karta hai, but:
// flow: number change → render → useEffect → setResult → extra re-render
// matlab ek unnecessary extra re-render ho jaata hai



   return(

    <>

        <div id="box">
            {count}
        </div>

      

        <button id="increment" onClick={()=>setcount(count+1)}>
            ➕Increment
        </button>

          <button id="decrement" onClick={()=>setcount(count-1)}>
            ➖Decrement
        </button>

         <button id="reset" onClick={()=>setcount(0)}>
            Reset
        </button>

        <div>
              <div id="box2">Fibonnaci is: {result} </div>
              <input type="number" value={number} onChange={(event)=>{ setnumber(event.target.value)}}></input>
        </div>


    </>

   )

}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


// useEffect tab use karo jab tumhe koi side-effect karna ho, jaise data fetch karna ya DOM ko update karna, aur ye kuch return nahi karta:
// useEffect(() => {
//   fetchData();
// }, [someState]);



// useMemo tab use karo jab tumhe koi heavy calculation optimize karni ho, taaki baar-baar na ho, aur ye data return karta hai:
// const result = useMemo(() => {
//   return heavyCalculation(someValue);
// }, [someValue]);
