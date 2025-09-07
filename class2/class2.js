// Bhai 👌 yeh link isliye use karte hain taaki React library ko apne project me laa saken bina install kiye.
// <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
// <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

// React ka typeof bhi "Object" hain 
// Humne react aur reactdom ke liye alag alag link kyun use kiya h , uska reason h 
// 1. Code bohot bada ho jaata agar woh dono code ek link ke andar hote 
// 2. react native use krte h app development k liye , aur waha toh 
// .html file nahi hoti h ki usmein DOM manipulation kre , kyunki jarurat nahi h toh waha Reactdom ki jarurat nahi par react ki jarurat pad sakti h aur use krskte h isiliye indono ka alag alag file h taaki jisko jo use krna h woh kre

const head1 = React.createElement("h1",{},"Hello Coder Army");

// ReactDOM.render(element,document.getElementById("root"));// no longer supported in React18 it is deprecated , matlab abhi kaam  krega par uss ke jagah better options available h isiliye warning deta h browser console mein.


const Reactroot = ReactDOM.createRoot(document.getElementById("root"));
// yeh major update isiliye aaya kyunki uska reason tha "immediate response" , pehle react 17 tak jab hum purana method use krte the        "ReactDOM.render(element,document.getElementById("root"))" ismein hota yeh tha jaise , maan lete h humne netflix mein 3 buttons hain
// "movies , shows , subscription" toh agar iss method se chale toh agar meine "subscription" par click kiya aur phir turant "shows" par click kiya toh hota yeh tha ki jab tak "subscription" ka pura page load/render nahi ho jaata toh tab tak "shows" wala page nahi khulta , toh yeh bohot bada hindrance tha "user experience" mein isiliye naya method aaya
// "ReactDOM.createRoot" wala iss mein yeh hota h ki saari power hum React ko dedete h actually ismein internally hota yeh h ki
//  "document.getelementbyId("root")" ko hum "React root Container" naam ki jagah mein daal dete h jisse iss root par pura control react ka aata h aur phir woh "user experience" badha deta h "immediate response" se
// React bhi JS ka library h woh bhi single threaded hi hain toh pehle jab "immediate action" nhi kr paata matlab "subscription" click krke turant "shows" par click krdete the aur uska request aata tha par purana method mein response nahi krta tha , lekin ab "react18" ka method use krne se react pehle wale kaam ko halt par daaldega , matlab "subscription" wale page ko pura load nahi krega  aur dusre kaam ko chalu krdega matlab "shows" ko load krna chalu krdega 
// dekho JavaScript (and React) bhi single threaded hi hain browser multithreaded h par react ke pass yeh power h ki woh request fulfill krne k liye purana kaam halt krdeta h aur immediate kaam ko fulfil krne lag jaata h aur yahi cheez user experience badha deti h. 
// JavaScript itself is single-threaded → it can only execute one thing at a time. But when JS needs to do something heavy or wait
//  (like a timer, network request, or event), it delegates/assigns that work to the browser

Reactroot.render(head1);


// CDN -> Content Delivery Network 35mins
// CDN ek servers ka network hota hai jo duniya ke alag-alag jagah pe faila hota hai.
// Iska kaam hota hai website ke content ko user tak , fastest server se dena – matlab jo server user ke sabse paas ho.

// Shreyas, tu chahta hai main ek real-life analogy (ghar ka example) bana ke samjhau jisme CDN ko ek courier/delivery service se compare karein?


// Bhai 👌 chalo ekdum real-life example lete hain YouTube ka, aur tu Mumbai se video request kar raha hai
// 🎥 Example: YouTube Video Request from Mumbai
// Tu YouTube pe ek video play karta hai (Mumbai se).
// Browser request bhejta hai → "Mujhe ye video chahiye".

// CDN check karta hai nearest server.
// Google/YouTube ke paas CDN servers (edge servers) India ke alag-alag cities me hote hain – jaise Mumbai, Delhi, Chennai.
// Mumbai server pe check hota hai
// Agar us video ka cached copy pehle se Mumbai ke CDN server me hai → turant wahi se serve kar diya jaayega.
// Agar nahi hai → wo original server (ya fir nearby data center, jaise Pune) se laayega, Mumbai server me cache karega aur fir tujhe dega.

// Result:
// Tujhe video super fast milega, buffer kam hoga.
// Agli baar Mumbai ke users (ya nearby cities) jo same video play karenge → unko direct Mumbai CDN server se copy mil jaayegi, kyunki jab tune request ki thi uss video ki toh usne apne pass woh video store kr liya Original server se aur phir koi aur same video ka request krega toh ab Mumbai ke CDN server mein available h.

//                  Diagram

//              [ You in Mumbai ] 
//                     |
//             Request for video
//                     |
//           +---------------------+
//           |  CDN Edge Server    |  (Mumbai)
//           +---------------------+
//                |                 |
//                |                 |
//     Available / Cached?   Not Cached / Not Available
//                |                      |
//            Serve Directly      Fetch from Origin Server 
//                                      |
//                       +-----------------------------+
//                       |   Origin Server /           |
//                       |   Pune Data Center     |
//                       +-----------------------------+
//                                      |
//                               Cache it in Mumbai CDN Edge Server
//                                      |
//

// Do tarah ke data hote h example jab hum koi video ka request krte h server se Static Data aur Dynamic Data

// 🔹 1. Static Data
// Definition: Aisa data jo bar-bar change nahi hota.
// Example: Video file, images, CSS, JavaScript.
// CDN Role: Ye data CDN pe cache ho jaata hai kyunki ek hi video sabko same milega (file ki copy change nahi hoti).
// Benefit: Agar tu Mumbai se video play kare → Mumbai ke nearest CDN server se turant mil jaayega.

// 🔹 2. Dynamic Data
// Definition: Aisa data jo frequently change hota hai aur har user ke hisaab se alag ho sakta hai.
// Example: Likes 👍, Shares 🔁, Comments 💬 count on a video.
// Why not on CDN?
// Agar ye CDN par store ho jaata to har location ka CDN alag-alag data dikhata hain .
// Example:
// Tu Mumbai me ho → CDN-Mumbai ne likes = 1,000 dikha diya.
// Tu UP shift kar gaya → CDN-UP ne likes = 950 dikha diya.
// Problem: Data inconsistency.
// Solution: Dynamic data direct origin server (main database) se aata hai.
// Origin pe sabka real-time data stored rehta hai.
// CDN sirf request ko fast route karta hai, lekin data origin se hi fetch hota hai.
// Isse guarantee hota hai ki chahe tu kahin bhi ho (Mumbai, UP ya USA), likes/shares/comments same aur updated rahenge.

// Zomato bhi Image CDN se le rha h kyunki image static hain , ispar reviews update hote rehta h / dynamic h , toh woh Original Server se le aata h.
// { <img alt="Restaurant Card" src="https://b.zmtcdn.com/data/pictures/8/21195108/b221fc2…_featured_v2.jpg?output-format=webp" loading="lazy" class="sc-s1isp7-5 fyZwWD"></img> }