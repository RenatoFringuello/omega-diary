$(function(){

    $("#goHome").on("click", ()=>{
        goto("pages/home.html");   
    });

    $(".hamburger").on("click", ()=>{
        toggleHam();
    });

    var open = false;
    $("#rest").on("click", ()=>{
        open = !open;
        if(open){
            setTimer();
            showTimer();
            count();
        }
        else{
            stopTimer();
        }
    });

});