const { createApp } = Vue;
const DateTime = luxon.DateTime;

createApp({
    data(){
        return{
            timer : '',
            timeRaw : '01:00',
            timeFullSeconds : 0,
            timeCurrentSeconds : 0,
            timerToggle : false,
            buttonState : 'Rest',
            activeSlide : 0,
            workoutsPlan : workouts,
        }
    },
    methods : {
        getMappedHeight(maxA, a, maxB){
            return (a * maxB) / maxA;
        },
        startTimer(){
            if(this.timerToggle){
                //on click when open

                //change button state name
                this.buttonState = 'Rest';
                //stop counting
                clearInterval(timer);
            }
            else{
                //on click when closed
                
                //change button state name
                this.buttonState = 'Stop';
                //get target time
                const timeTarget = DateTime.now().plus({minutes:this.timeRaw.split(':')[0], seconds:this.timeRaw.split(':')[1]});
                //get now
                let timeCurrent = DateTime.now();
                //get max time
                this.timeFullSeconds = ((timeTarget.c.minute - timeCurrent.c.minute) * 60) + timeTarget.c.second - timeCurrent.c.second;
                
                //start counting
                timer = setInterval(()=>{
                    //get now
                    timeCurrent = DateTime.now();
                    //subtract every seconds delayed
                    this.timeCurrentSeconds = ((timeTarget.c.minute - timeCurrent.c.minute) * 60) + timeTarget.c.second - timeCurrent.c.second;
                    console.log(this.timeCurrentSeconds);
                    if(this.timeCurrentSeconds <= 0){
                        //stop timer
                        this.timerToggle = false;
                        clearInterval(timer);
                    }
                }, 100);
            }
            //toggle it
            this.timerToggle = !this.timerToggle;
        }
    }
}).mount('#app');