let container = document.querySelector(".grid-container");


function insertDiv(counter){
    for(let count = 1 ; count <= counter*counter ; count++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item'+count);
        container.appendChild(newDiv);

    }
    
}

insertDiv(16);