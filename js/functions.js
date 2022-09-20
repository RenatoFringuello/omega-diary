function loading(){
    navigator.permissions.query({name:'audio'}).then((result) => {
        if (result.state === 'granted') {
          showMap();
        } else if (result.state === 'prompt') {
          showButtonToEnableMap();
        }
        // Don't do anything if the permission was denied.
      });
}

function goto(link){
    document.location.href = link;
}

// aside menu toggle
//aside = header
function toggleHam(){
    var hamClass = $(".hamburger").attr("class");
    if( hamClass == "hamburger closed"){
        $(".hamburger").attr("class", "hamburger open");
        open();
    }
    else{
        $(".hamburger").attr("class", "hamburger closed");
        close();
    }
}
function open(){
    $("header .logo").fadeOut(100, ()=>{
        $("header.principale").css({
            "background-color" : "var(--def1)",
            "width" : "50px",
            "height" : "100%"
        });
        $("header.principale .logo").show();
        $("header.principale .logo").css("position", "absolute");
        $("ul.buttons-menu .item").fadeIn("slow");
        $(".overlay").fadeIn("slow");
        $("header.principale").css({
            "transition" : "all 0.5s ease-in-out",
            "box-shadow" : "10px 0px 4px #0004",
            "width" : "60vw",
        });
    });
}
function close(){
    $("ul.buttons-menu .item").fadeOut(100,()=>{
        $("header .logo").fadeOut(100);
        $(".overlay").fadeOut("slow");
        $("header.principale").css({
            "width" : "50px",
            "box-shadow" : "none",
            "background-color" : "#0000"
        });
    });
    setTimeout(()=>{
        $("header.principale").css({
            "transition" : "none",
            "width" : "100%",
            "height" : "50px"
        });
        $("header.principale .logo").css("position", "static");
        $("header.principale .logo").fadeIn("slow");
    },500);
}

//map
function map(maxA, maxB, a){
    return (maxB * a) / maxA;
}

//sound play
function playSFX(soundPath){
    const sfx = new Audio(soundPath);
    sfx.play();
}

//Timer
var timeinSec, currentTimeinSec;
function setTimer(){
    $("#rest h2").text("Stop");
    var timeRaw = $(".timerset").val().split(":");
    currentTimeinSec = timeinSec = parseInt(timeRaw[0]) * 60 + parseInt(timeRaw[1]); 
    $(".time").text(currentTimeinSec);
    $(".liquid").css("height", map(timeinSec, 100, currentTimeinSec) + "%");
} 

function showTimer(){
    $("body footer.principale.workout").css({
        "animation" : "height 0.5s ease-in-out once",
        "height" : "calc(100% - 50px)"
    });
}

var timerSet;
function count(){
    timerSet = setInterval(()=>{
        if(currentTimeinSec > 0){
            currentTimeinSec --;
            $(".time").text(currentTimeinSec);
            $(".liquid").css("height", map(timeinSec, 100, currentTimeinSec) + "%");
            if(currentTimeinSec < 3){
                console.log("re");
                playSFX("../res/sfx/cowbell.wav");
            }
        }
        else{
            playSFX("../res/sfx/cowbell.wav");
            setTimeout(()=>{
                playSFX("../res/sfx/cowbell.wav");
            },250);
            stopTimer();
        }
    },1000);
}

function stopTimer(){
    clearInterval(timerSet);
    $("#rest h2").text("Rest");
    $("body footer.principale.workout").css({
        "height" : "fit-content"
    });
}