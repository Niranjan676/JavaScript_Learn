/* function multiply(num1, num2){
    let result = num1 * num2;
    return result;
}
console.log(multiply(2, 3))

 //---------------------------------------------
function width(l, b){
    if(l * b > 30){
        return console.log(l * b)
    }else{
        return console.log(0)
    }
}
console. log(width(-7, 5))

//Functions----------------------------------------------

function getRectArea(width, height) {
    if(width > 0 && height > 0){
        return width * height;
    }
    return 0;
}
console.log(getRectArea(-3, 4))

// Events------------------------------------------------
document.querySelector("h1").addEventListener("click", ()=>{
    alert("Ouch! stop poking me");
});


//------------------------------------------------------- */

const myImage = document.querySelector("img")

myImage.onclick = ()=>{
    const mySrc = myImage.getAttribute("src")
        if(mySrc === "image/firefox.jpeg"){
            myImage.setAttribute("src", "image/firefox2.jpg")
        }else if (mySrc === "image/firefox2.jpg"){
            myImage.setAttribute("src", "image/fire.jpg")
        }else {
            myImage.setAttribute("src", "image/fir.jpg")
        }
}