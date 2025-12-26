// Custom Hook

import React , {useEffect ,useState } from "react";
import ReactDom from "react-dom/client"


export default function Usefetch (){

     let [profiledata, setprofiledata] = useState([]);
      let[namestore,setnamestore] = useState("");
      let[namesearch,setnamesearch] = useState("");

     function fetchdata() {
    
        
        // this line i added because if api doesn't give me data it returns 
    
        const promise = fetch(`https://api.github.com/search/users?q=${namestore}&per_page=20`);
        promise
          .then((response) => response.json())
          .then((data) => setprofiledata(data.items || []));
          
          // data.items isiliye kyunki data ek object h aur uspar hum .map use nahi krsakte , lekin jo humein data chahiye woh data object ke andar items naam ka array h usmein h toh hum data.items krenge toh uspar map laga sakte h 
        //response.json return hokar next .then mein chala jaata h as an parameter
      }

      return {fetchdata , profiledata , namestore , namesearch} //jo bhi data iss file mein aur main file common hain aur use ho rha h usko return krdene ka main file mein 
}