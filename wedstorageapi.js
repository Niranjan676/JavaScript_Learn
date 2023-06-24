let myButton = document.querySelector("button")
let myHeadding = document.querySelector("h1")

function setUserName(){
    const myname = prompt("please enter your name")
    localStorage.setItem("name", myname)
    myHeadding.textContent = `Welcome home, ${myname}`;
}

