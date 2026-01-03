import React , {useState,useEffect,useMemo,useRef,createContext} from "react";
import ReactDom from "react-dom/client"
import {BrowserRouter , Routes , Route } from "react-router"
import { Outlet,Link } from "react-router";
// Jis parent component ke andar child routes hote hain,
// us component mein <Outlet /> import karna hota hai.
// <Outlet /> ek placeholder hota hai jahan child routes
// apna UI render karte hain.
// <Outlet /> child routes ko render karne ki jagah deta hai




export default function Contact(){



        return(
            <>
                {/* yha par nav toh <Browserrouter> ke andar wrap nahi lekin main file mein toh sab kuch   <Browserrouter> ke andar h , uska reason h main file mein iska parent ek baar browser router ke andar hain toh ab alag file mein jarurat nahi h <Browserrouter> ke andar wrap krne ki woh directly fetch krleta h , bas important yeh h ki main file mein iska parent  <Browserrouter> ke andar hona chahiye */}
                <nav>
                    {/* yeh link children h toh parent mein likhe h , jaise yeh Contact ke child route h toh contact ke page ke andar likhe toh yeh child route tabhi display honge jab hum contact wale page par honge */}
                    <Link to="Cdata">Contact data</Link>
                    <Link to="Cdata2">Contact data 2</Link>
                    <Link to="Cdata3">Contact data 3</Link>

                </nav>
            



            {/* <Outlet /> outlet ko jaha se call kroge woh wahi dikai dega , yha se call krunga toh outlet ka data hello contact ke upar dikhai dega UI mein */}
            <h1>
                Hello Contact 
                {/* yeh hello contact har contact ke child ke page par dikhayega kyunki yeh hard coded h aur yeh  <Routes> ke bahar bhi likha hota hai, <Routes> ke bahar ka data har page par show hota hai.  */}
            </h1>


            {/* React Router mein parent route hamesha render hota hai.
            Par child route ko render hone ki jagah chahiye — wahi jagah <Outlet /> hoti hai , router toh sirf  url check krta h ki url active/written h searchbar par aur outlet uss url se connected data ko render wahi krwadeta h. 
            👉 <Outlet /> ek placeholder / container hai
            jahan nested (child) route ka UI inject hota hai , iss outlet mein Cdata aur Cdata2 ka UI inject h aur <Outlet/> ko call krunga toh UI mein display hoga tabhi.
            Agar <Outlet /> nahi hoga:
            Parent page dikhega ✅
            Child page kabhi nahi dikhega ❌*/}

                {/* 
                Yahan <Outlet /> use kiya gaya hai,
                isliye h1 ke neeche child route ka UI render hoga.
                <Outlet /> ek placeholder hota hai jo nested routes/children ko parent component ke andar display karne deta hai , multiple children hote h toh kaunsa children dikhana h outlet unhi Ui par display kradeta h.
                URL ke path ke hisaab se kaunsa child render hoga,
                yeh React Router decide karta hai.
                */}
             <Outlet /> 
            </>

        )




}