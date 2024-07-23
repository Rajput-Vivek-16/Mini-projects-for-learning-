//let boxes = document.getElementsByClassName("box");
let boxes = document.querySelector(".container").children;
// console.log(boxes);                  //get all boxes in HTML collection
//console.log(Array.from(boxes));       //convert HTML collection to array\

//We will use one math concept that is to genarate a random number between two numbers [a,b] 
// randomNumber = a + Math.random()*(b-a)


function getRandomColor() {
    let red = 0 + Math.random() * 255;
    let green = 0 + Math.random() * 255;
    let blue = 0 + Math.random() * 255;
    return `rgb(${red}, ${green}, ${blue})`;
}

Array.from(boxes).forEach(e => {
    e.style.backgroundColor = getRandomColor();
    //console.log(e.getAttribute("style",CSSStyleValue));
    e.style.color = getRandomColor();
})


let buttons = document.querySelectorAll(".box");
buttons.forEach(function (button) {
    //console.log(button);
    button.addEventListener("click", function (e) {
        //console.log(e.target.style.backgroundColor);
        document.querySelector("body").style.backgroundColor = e.target.style.backgroundColor;
    })
})
