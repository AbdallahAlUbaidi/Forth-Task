const card1 = document.querySelector("#firstCard");
const button1 = document.querySelector("#button1");


button1.addEventListener("touchstart" , function(){
    card1.classList.add("onTouch");
    
});
button1.addEventListener("touchend" , function(){

    setTimeout(250);
    card1.classList.remove("onTouch");
});

