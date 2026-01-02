import React , {useState,useEffect,useMemo,useRef,createContext} from "react";
import ReactDom from "react-dom/client"
import Increment from "./increment";
import Decrement from "./decrement";

// createcontext creates an context where we will create data so that we can export that data , in this case 
// const GlobalContext = createContext("Shreyas","Raju","Shyam"); WRONG hain
// GloablContext single data leta h , multiple data k liye object ke form mein bhej sakte h 
const GlobalContext = createContext({
    name:"shreyas",
    age:"19",
    place:"Mumbai",
})

console.log( GlobalContext);

export default GlobalContext;


// Global file , this file can be understand as the Origin     source where data can be imported from this global file avoiding props drilling issues with direct connection and no need of rendering files which does't need the props/data 

   //                   ┌─────────────────┐
   //                   │   global.js     │
   //                   │ (Context Store) │
   //                   │ count, setCount │
   //                   └────────┬────────┘



// Steps ,  context iss case mein gobalcontext h
// first create a context using createContext
// provide a data inside context using .provider and wrap krdo childrens/descendant ko 
// third data ko use krna h agar childrens ko toh kisi object mein store krale aur use kre 