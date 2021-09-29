let container = document.querySelector(".grid-container");
let value = document.querySelector(':root');



function insertDiv(counter){
    value.style.setProperty('--val',counter);
    for(let count = 1 ; count <= counter*counter ; count++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.classList.add('item-'+count);
        container.appendChild(newDiv);
    }
   

 
}
function addColor(e){
    console.log(e.target.className);
    let item = document.querySelector(`[class = "${e.target.className}"]`);
    console.log(item);
    item.classList.add('red');

    }
function removeColor(){

    cells.forEach(function(item){
        item.classList.remove('red');
        console.log(item);
    });
}

insertDiv(50);

var cells = document.querySelectorAll('.grid-item');
cells.forEach(item => item.addEventListener("mouseover",addColor));

var clear = document.querySelector('#clear');
clear.addEventListener("click",removeColor);