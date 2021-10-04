var container = document.querySelector(".grid-container");
var value = document.querySelector(':root');

function insertDiv(counter){ 
    console.log(counter+'1');
    container.innerHTML = " "
    value.style.setProperty('--val',counter);
    for(let count = 1 ; count <= counter*counter ; count++){
        let newDiv = document.createElement('div');
        newDiv.classList.add('grid-item');
        newDiv.setAttribute('id',count);
        container.appendChild(newDiv);
    }
  
} 


function addNewVal(e){
   let grid = parseInt(e)
   let content = document.getElementById('grid-value')
   if(isNaN(grid)){
        grid = 10;
        console.log('hello')
   }
   content.textContent = grid;
   return grid;
   
}

let update = document.querySelector('#range')
update.addEventListener("change",insertDiv(addNewVal()));



var choices = document.querySelectorAll('.choice');


choices.forEach(val=>val.addEventListener("click",function(e){
    var all = document.getElementById("box").querySelectorAll('div');
    console.log(e.target.id);
    switch(e.target.id){
        case "rainbow":
            all.forEach(item => item.addEventListener("mouseenter",function(e){
                const hex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
                let hexnumb = "#"
                for(let a = 1; a <= 6;a++){
                    const rand = Math.floor(Math.random()* hex.length) 
                    hexnumb = hexnumb + hex[rand];
                } 
                e.target.style.backgroundColor = hexnumb;
            }))
            break;
        case "erase":
            all.forEach(item =>item.addEventListener("mouseenter", function(e){
                e.target.style.backgroundColor = null;
            }))
            break;
        case "clear":
            all.forEach(function(e){
                e.style.backgroundColor = null;
            })
            break;
    }
    
})) 







