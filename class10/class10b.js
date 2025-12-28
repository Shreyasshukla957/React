import React, { useEffect, useState , useMemo , useRef } from "react";
import ReactDOM from "react-dom/client";

function App(){
    const[count,setcount]= useState(0);
    // let money = 0;
    let money = useRef(0);
    console.log(typeof (money)); 
    console.log(money);//money ek object bn gya h
    console.log(money.current);//money ke andar ka value display krata h yah '0' se initialize hua h toh '0' display krega

    return(
        <>

             <div id="box">
                Count: {count}
             </div>

           <button id="increment" onClick={()=>setcount(count+1)}>
            ➕Increment
            </button>

             <div id="box">
                Money: {money.current}
             </div>
            <button id="increment"
             onClick={()=>{money.current = money.current + 1
                console.log(money);
             }}>Money</button>

        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);

// 1️⃣ money ek normal variable hai, React isko track nahi karta
//    isliye money ki value console mein badh rahi hoti hai,
//    lekin UI par display nahi hoti

// 2️⃣ jab count button click hota hai:
//    count ek useState variable hai
//    setCount → re-render trigger karta hai
//    isliye count ki updated value UI par turant dikh jaati hai

// 3️⃣ jab money button click hota hai:
//    money ki value badhti hai (internally)
//    lekin re-render nahi hota
//    isliye UI update nahi hoti

// 4️⃣ jab baad mein count button click hota hai:
//    component re-render hota hai
//    aur money normal variable hone ki wajah se
//    fir se initial value (0) pe reset ho jaata hai

// 5️⃣ is problem ko solve karne ke liye useRef hook use hota hai
//    useRef ek object return karta hai
//    jisme ek key hoti hai: .current

// 6️⃣ useRef ke saath:
//    money.current ke andar value store hoti hai
//    ye value re-render ke baad bhi persist rehti hai
//    (reset nahi hoti)

// 7️⃣ jab money.current update hota hai:
//    value store hoti hai
//    lekin useRef re-render trigger nahi karta
//    isliye UI turant update nahi hoti

// 8️⃣ jab count button click hota hai:
//    count re-render karwata hai component ko
//    re-render ke baad UI money.current ki stored value
//    automatically display kar leti hai

// 9️⃣ agar useRef re-render karwata:
//    toh money button pe click karte hi
//    component re-render hota
//    aur money ki value turant UI mein dikh jaati
//    (lekin aisa nahi hota)

// 🔥 Conclusion:
// useState → value store + re-render
// useRef   → value store only (no re-render)
// normal variable → na store, na re-render
