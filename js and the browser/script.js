// console.log("Script loaded!"); // testing if the script is loaded
const button = document.getElementById("btn");
const text = document.getElementById("text");
// const buttons = document.querySelectorAll(".btn");
const container  = document.getElementById("container");
const btn = document.getElementById("load");
const result = document.getElementById("result");




const list = document.getElementById("list");
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = "Item " + (list.children.length + 1);
    list.appendChild(li);
});
list.addEventListener("click", (e) => {
    if(e.target.tagName == "LI"){
        e.target.style.color = "red";
    }
});








btn.addEventListener("click", async () => {
    result.textContent = "Loading...";
    const res = await fetch("https://api.github.com/users/NafisUddinElok");
    const data = await res.json();
    // console.log(data);
    // displayData(data);
    result.textContent = `Username: ${data.login}, ID: ${data.id}`;
});



// replacement for buttons.forEach with event delegation
container.addEventListener("click", (e) => {
    console.log(`You clicked on a ${e.target.tagName} element with text: ${e.target.textContent}`);
});
// buttons.forEach(btn =>{
//     btn.addEventListener("click", () =>{
//         console.log(`You clicked button with text: ${btn.textContent}`);
//     });
// });
button.addEventListener("click", () => {
  console.log("Button was clicked!");
}); // button event listener mane button click korle inspect ker console e likha ashbe "Button was clicked!"
text.addEventListener("mouseover", () => { // er mane eitar upor mouse niye gele event ta hobe 
  console.log("Text was hovered over!");
}); // text event listener mane text er upor mouse niye gele inspect ker console e likha ashbe "Text was hovered over!"
