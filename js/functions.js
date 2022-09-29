function loading(){
    
}

/* ------------------------------LOG IN------------------------------ */
function goto(link){
    document.location.href = link;
}

/* ------------------------------ASIDE MENU------------------------------ */
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
            "background-color" : "var(--col1)",
            "width" : "50px",
            "height" : "100%"
        });
        $("header.principale .logo").show();
        $("header.principale .logo").css("position", "absolute");
        $("ul.buttons-menu .button").fadeIn("slow");
        $(".overlay").fadeIn("slow");
        $("header.principale").css({
            "transition" : "all 0.5s ease-in-out",
            "box-shadow" : "10px 0px 4px #0004",
            "width" : "60vw",
        });
    });
}
function close(){
    $("ul.buttons-menu .button").fadeOut(100,()=>{
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

/* ------------------------------HOME------------------------------ */
//set frequency
function setFrequency(isMono){
    if(isMono){
        // in mono freq people train just one group
        $("#muscular-group input").attr("type", "radio");
    }
    else{
        // in multi freq people train just two or more group, sometimes total body
        $("#muscular-group input").attr("type", "checkbox");
    }
}

/* ------------------------------WORKOUT------------------------------ */
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
    $("footer.workout").css({
        "transition" : "all 0.8s ease-in-out",
        "top" : "50px",
        "bottom" : "0"
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
        "top" : "calc(100% - 104px)",
        "bottom" : "auto"
    });
}

/* ------------------------------THEME------------------------------ */
function setTheme(id){
    var path = (id == "def") ? "../css/themes/default-theme.css" : "../css/themes/" + id + ".css"
    $("#linkTheme").attr("href", path);
}