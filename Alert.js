// let p = document.createElement("p");
// p.innerText = "lorem ipsum";
// document.body.appendChild(p);

// document.body.style.background = "red"
// p.style.color = "white"

let anb = document.querySelector(".redparagraph");
let stikh = document.querySelector(".stikh");
let buttonAdd = document.querySelector("#buttonadd");
let input = document.querySelector("#input");

let paragraphs = ["Не прилично ли будет нам, братия,", 
"Начать древним складом",
"Печальную повесть о битвах Игоря,",
"Игоря Святославича!",
"Начаться же сей песни"
]

let zagolovok = document.createElement("h1");
zagolovok.className = "redparagraph";

for (let paragraph of paragraphs) {
    let elem = document.createElement("p");
    elem.className = "blueparagraph";
    elem.innerText = paragraph;
    elem.addEventListener("click", () => {elem.parentNode.removeChild(elem)})
    stikh.appendChild(elem);
}

buttonAdd.addEventListener("click", () => {
let elem = document.createElement("p");
elem.className = "blueparagraph";
elem.innerText = input.value;
elem.addEventListener("click", () => {elem.parentNode.removeChild(elem)})
stikh.appendChild(elem);
input.value = ""
})