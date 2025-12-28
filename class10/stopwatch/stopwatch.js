import React, { useEffect, useState, useMemo, useRef } from "react";
import ReactDOM from "react-dom/client";

// setinterval ka kaam h ek second baad settime(time+1) ko call kre after 1 sec

function StopWatch() {
  const [time, settime] = useState(0);
  const intervalref = useRef(null); //useRef ek object deta h aur apne andar value current naam ki key mein rakhta h toh data intervalref.current mein store hoga

  function start() {

    if(intervalref.current!==null)
        return ;

    // Jab tum normal function banaate ho, wo har re-render pe recreate hota hai, but purana wala execute nahi hota, kyunki koi active reference nahi rehta. Lekin setInterval ya event listeners ke case mein, wo puranew wale bhi active rehte hain, jab tak tum unhe clear nahi karte, isliye wo accumulate ho jaate hain।
    intervalref.current = setInterval(() => {
      // settime(time+1) yha closure ka issue h iss mein time ki sorrounding ki purani wali value hi yaad rehti h kyunki uska refernce pakad kr rakhta h toh usmein toh 0 hi store rehta h isiliye purani value hi dikhata h , aur jaise hi re-render hota h naya time variable bnta h aur reference change ho jaata h aur value update hokar 1 ho jaati har par yha setinterval ke andar toh time ki value '0' hi rehti h because purane wala time ka reference pakad kr rakha h aur wahi reason h ki 0 hi dikhata h , par jab dusra method (callback function ) wala use krte h toh yeh dikkat nai hoti h kyunki settime baar baar jaa kar latesy value time ki pakad ke le aata h
      settime((prevtime) => prevtime + 1); //settime latest value khud laakar deta h callback function ke paramter mein , yha prevtime ke andar latest value laakar dega time ka toh updated value milta rhega toh woh 0 par stuck nahi rhega
      console.log(time);
    }, 1000);

    // Button click hua, start function call hua
    // start function ne ek baar setInterval create kiya
    // setInterval ka callback us render ke scope ko closure mein pakad leta hai
    // jisme time = 0 tha
    //
    // har 1 second callback chalta hai aur settime(time + 1) call hota hai
    // pehli baar state 1 ho jaati hai aur component re-render hota hai
    //
    // React ke re-render hone par naya time variable banta hai (time = 1)
    // lekin purana setInterval callback abhi bhi
    // purane render ke time variable (0) ka reference use karta hai
    //
    // isliye setInterval ke andar time ki value hamesha 0 hi rehti hai
    // aur state baar-baar 1 par hi set hoti rehti hai (stale closure problem)
    //
    // NOTE:
    // re-render hone se naya interval create nahi hota
    // interval sirf tab create hota hai jab setInterval() wali line dobara execute ho

    // setInterval  ko normal variable mein store nahi kar sakte
    // kyunki React ke har re-render par normal variables reset ho jaate hain
    // agar setinterval reset ho gayi to clearInterval ko sahi reference nahi milega
    // aur interval band nahi ho paayega
    //
    // useRef ek aisa object deta hai jiska .current re-render ke baad bhi same rehta hai
    // useRef value ko persist karta hai bina component ko re-render kiye
    // isliye interval ID ko useRef.current mein store kiya jaata hai
    //
    // Conclusion:
    // Timers / intervals / DOM references ke liye
    // jinko re-render ke baad bhi yaad rakhna ho
    // normal variable ke bajay useRef use karna chahiye
  }



  function stop() {
    clearInterval(intervalref.current); //yha par setinterval delete kr diya par jo latest time ki value h woh toh rhegi toh woh UI mein showkrega jaha jaha {time} aise likha hoga
    intervalref.current = null;
  }



  function reset() {
    clearInterval(intervalref.current);
    settime(0);
  }



  return (
    <>
      <h1>StopWatch is: {time}</h1>
      <button className="but" onClick={() => start()}>
        Start
      </button>
      <button className="but" onClick={() => stop()}>
        Stop
      </button>
      <button
        className="but"
        onClick={() => {
          reset();
        }}
      >
        Reset
      </button>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StopWatch />);



// 🔑 React re-render rule:
//
// Re-render par component function poora dobara run hota hai
// lekin sirf React ke andar wali cheezein nayi banti hain
//
// ✅ Re-render par nayi banti hain:
// - Normal variables
// - Component ke andar functions
// - JSX / inline callbacks
//
// ❌ Re-render par nayi nahi banti:
// - setInterval / setTimeout
// - Browser event listeners
// - useRef ka object (.current)
// - Background / live browser tasks
//
// 🧠 Yaad rakhne ka rule:
// Jo cheez browser mein "live" hoti hai
// wo re-render par naye reference par nahi banti

