// create element through JS

// React ek Object h yha
const React = {
    createElement: function (tag, styles, children) {
        const element = document.createElement(tag);

        if (Array.isArray(children)) {
            for (let key of children) {
                element.append(key);
            }

        }
            else{
                element.innerText = children;
            }


            for (let key in styles) {
                element.style[key] = styles[key];
            }

            
            return element;
        

    }
} 

const li1= React.createElement("li", {}, "HTML");
const li2 = React.createElement("li", {}, "CSS");
const li3 = React.createElement("li", {}, "JS");



const header1 = React.createElement("h1", { backgroundColor: "blue", color: "white", fontSize: "30px" }, "Hello Dear");
const header2 = React.createElement("h1", { backgroundColor: "yellow", color: "black", fontSize: "30px" }, "Hello Dear kaise ho");
const ul = React.createElement("ul", { backgroundColor: "yellow", color: "black", fontSize: "30px" },[li1, li2, li3]);

// DOM bhi ek object idhar hain
const ReactDOM = {

    render: function (elementname, elementID) {
        const Root = elementID;
        Root.append(elementname);

    }

}



ReactDOM.render(header1, document.getElementById("root"));
ReactDOM.render(header2, document.getElementById("root"));
ReactDOM.render(ul, document.getElementById("root"));

// const header1 = document.createElement("h1");
// header1.innerText = "HEllo Dear";
// header1.style.backgroundColor = "Blue";
// header1.style.fontSize = "30px";
// header1.style.color = "White";

// // wapas ek header bnane ke liye pura code likhna pad rha h yeh toh sirf 2 baar h toh likh dena bhi aasan hain wahi agar 100+ header likhna pade toh baar baar nahi likh sakte hain hum
// const header2 = document.createElement("h1");
// header2.innerText = "HEllo Shreyas Kaise ho";
// header2.style.backgroundColor = "Yellow";
// header2.style.fontSize = "30px";
// header2.style.color = "Black";




// unordered list
// HTML
// CSS
// JS