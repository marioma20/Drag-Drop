
let inp = document.getElementById('inp');
let btn = document.getElementById('btn');
let boxs = document.querySelectorAll('.box');
let items = document.querySelectorAll('.item');

let drag = null;

btn.onclick = function(){

    if(inp.value != ''){

        boxs[0].innerHTML += `
         
        <p class="item" draggable="true">${inp.value}</p> 
        
        
        `;
        inp.value = '';
    }
    dragitem();
}

function dragitem(){

    let items = document.querySelectorAll('.item');
    
    items.forEach(item =>{

        item.addEventListener('dragstart', function(){
               
            drag = item;
            item.style.opacity = '0.5';
           // console.log('dragstart');
        });

        item.addEventListener('dragend', function(){
             
            drag =null;
            item.style.opacity = '1';

          //  console.log('dragend');
        });
        boxs.forEach(box =>{
               
            box.addEventListener('dragover', function(e){
                e.preventDefault();
                   
                // console.log('dragover');
                box.style.background = '#060';
                box.style.color = '#fff';
            });
            box/addEventListener('dragleave', function(){

               // console.log('dragleaveve');
                box.style.background = '#fff';
                box.style.color = '#000';
            });

            box.addEventListener('drop', function(){

              //  console.log('drop');
                box.append(drag);
                box.style.background = '#fff';
                box.style.color = '#000';
            })

        });
    });
}