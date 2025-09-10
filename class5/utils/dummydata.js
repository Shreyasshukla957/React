//const arr ke pehle direct export default nahi laga sakte h
const arr = [
  { Cloth: "Dhoti", Offer: "40-80%off" , Price: "200" },
  { Cloth: "T-Shirts", Offer: "30-80%off", Price: "800" },
  { Cloth: "Pants", Offer: "30-50%off", Price: "580" },
  { Cloth: "Kurta", Offer: "20-60%off", Price: "1200" },
  { Cloth: "Top", Offer: "10-30%off", Price: "2000" },
  { Cloth: "Payjama", Offer: "50-80%off", Price: "1520" },
  { Cloth: "Patloon", Offer: "10-20%off", Price: "800" },
];

const jaadugar = (()=>{
    console.log("Mera naam Jaadugar");
});

export default arr; //sirf ek cheez aap export default kr sakte h sab kuch nahi baaki sab export krne k liye normal export krna padega jaise export {jaadugar}
export {jaadugar} ;  
