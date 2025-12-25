let b = 90;

function greet(){
    let a = 20;
    console.log(a);
    console.log(b);

    function meet(){
        console.log(a);
    }

    // meet();
    return meet;
}

let m = greet();
console.log(m); 
m();
// let bs = meet();
// bs(); yeh bhi error dega aap directly andar ke function ko call nahi kr sakte , iss case mein meet () ko directly bahar se call nahi kr sakte.
// console.log(a); error maar dega

// 👉 Closure tab hota hai jab koi inner function
// apne outer function ke variables ko yaad rakhta hai,
// chahe outer function execute ho chuka ho.
//
// Is example mein greet() execute hone ke baad
// call stack se hata diya jaata hai,
// lekin greet ke andar define hua variable 'a'
// memory se delete nahi hota.
//
// Kyunki inner function 'meet' ko 'a' ki zarurat hoti hai,
// JavaScript us data ko memory mein safe rakh leta hai.
//
// Isliye jab baad mein meet() call hota hai,
// uske paas greet ke 'a' ki value abhi bhi hoti hai.
// Isi behavior ko Closure kehte hain.


// Misconception 
// “meet() ko a ke access ke liye greet() ka access bhi toh chahiye na???”
// 👉 Nahi. meet() ko greet function ka access nahi chahiye.
// Closure function ko yaad nahi rakhta,
// Closure sirf variables ko yaad rakhta hai.