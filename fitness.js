const text = document.querySelector('.java'); //  grabs the text with class name java
const strText = text.textContent; // the is a dom element but we olny want the text so that is why we do this 
const splitText = strText.split("");// we crate an array of each indivudual letters 
text.textContent ="";
for (let i=0; i < splitText.length; i++){
    text.innerHTML += "<span>"+ splitText[i] + "</span>";
}

let char=0;
let timer = setInterval (onTick, 50);

function onTick(){
const span = text.querySelectorAll('span')[char];
span.classList.add('fade');
char++
if(char === splitText.length){
        complete();
        return;
}
}

function complete(){
    clearInterval(timer);
    timer = null;
}