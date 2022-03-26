// let p = document.createElement("p");
// p.innerText = "lorem ipsum";
// document.body.appendChild(p);

// document.body.style.background = "red"
// p.style.color = "white"

let title = document.querySelector(".redparagraph");
let stikh = document.querySelector(".stikh");
let buttonAdd = document.querySelector("#buttonadd");
let input = document.querySelector("#input");

let paragraphs = ["Не прилично ли будет нам, братия,", 
"Начать древним складом",
"Печальную повесть о битвах Игоря,",
"Игоря Святославича!",
"Начаться же сей песни"
]

for (let paragraph of paragraphs) {
    let elem = document.createElement("p");
    elem.className = "blueparagraph";
    elem.innerText = paragraph;
    elem.addEventListener("click", () => {elem.parentNode.removeChild(elem)})
    stikh.appendChild(elem);
}

function myScript(e) {
console.log(e);
e.preventDefault();
if (input.value) {
    let elem = document.createElement("p");
    elem.className = "blueparagraph";
    elem.innerText = input.value;
    elem.addEventListener("click", () => {elem.parentNode.removeChild(elem)})
    stikh.appendChild(elem);
    input.value = ""    
}
}

