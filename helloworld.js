const hello = document.querySelector("h1");
hello.textContent = "Hello World";

//querySelector is an function
//textContent is an property
//----------------------------------------

let icecream = 'Chocolate';
                    if(icecream === 'chocolate'){
                        alert('Yay, i love chocolate icecream')
                    } else {
                        alert('Awww, chocolate is my favorite')
                    }

const loop = (x) => {
    if (x >=10)
    return console.log(loop(x + 1))
}