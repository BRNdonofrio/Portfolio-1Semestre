
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
},2000)

function nextImage(){
    count++;
    if(count>11){
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}
const menu = document.querySelector('.nav-links');
        const burguer= document.querySelector('.burguer');
        const linha1 = document.querySelector('#linha1');
        const linha2 = document.querySelector('#linha2');
        const linha3 = document.querySelector('#linha3');
        burguer.addEventListener('click' ,()=>
        {
            linha1.classList.toggle('linha1-active');
            linha2.classList.toggle('linha2-active');
            linha3.classList.toggle('linha3-active');
            menu.classList.toggle('nav-active');
            console.log("teste");


        });
