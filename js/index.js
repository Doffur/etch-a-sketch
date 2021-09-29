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
insertDiv(50);

let cells = document.querySelectorAll('.grid-container');
cells.forEach(item => item.addEventListener("mouseover",addColor));


