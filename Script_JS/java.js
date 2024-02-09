var input = document.getElementById("button2");

input.addEventListener("click", function(){

    var hide = document.getElementById("rede");
    
    if(hide.style.display === "flex"){
        hide.style.display = "none";
    } else{
        hide.style.display = "flex";
    }


});
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
