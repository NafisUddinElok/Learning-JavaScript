// console.log("Script loaded!"); // testing if the script is loaded
const button = document.getElementById("btn");
const text = document.getElementById("text");
const buttons = document.querySelectorAll(".btn");



buttons.forEach(btn =>{
    btn.addEventListener("click", () =>{
        console.log(`You clicked button with text: ${btn.textContent}`);
    });
});
button.addEventListener("click", () => {
  console.log("Button was clicked!");
}); // button event listener mane button click korle inspect ker console e likha ashbe "Button was clicked!"
text.addEventListener("mouseover", () => { // er mane eitar upor mouse niye gele event ta hobe 
  console.log("Text was hovered over!");
}); // text event listener mane text er upor mouse niye gele inspect ker console e likha ashbe "Text was hovered over!"
