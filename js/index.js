let container = document.querySelector(".grid-container");
let value = document.querySelector(':root');
let items = document.querySelector('.grid-item');




function insertDiv(counter){
    value.style.setProperty('--val',counter);
    for(let count = 1 ; count <= counter*counter ; count++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.classList.add('item-'+ count);
        container.appendChild(newDiv);
    }
   

 
}
function addColor(){
    items.classList.add('red');
}

insertDiv(100);
items.addEventListener("mouseover",addColor);
