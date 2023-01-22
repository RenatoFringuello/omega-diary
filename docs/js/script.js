const { createApp } = Vue;
const DateTime = luxon.DateTime;

createApp({
    data(){
        return{
            timer : 0,
            timeRaw : '01:00',
            timeFullSeconds : 0,
            timeCurrentSeconds : 0,
            timerToggle : false,
            buttonState : 'Rest',
            activeSlide : 0,
            isHidden : false,
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
                clearInterval(this.timer);
            }
            else{
                //on click when closed
                
                //change button state name
                this.buttonState = 'Stop';
                //get target time
                const splittedTimeRaw = this.timeRaw.split(':');
                const timeTarget = DateTime.now().plus({minutes:splittedTimeRaw[0], seconds:splittedTimeRaw[1]});
                //get now
                let timeCurrent = DateTime.now();
                //get max time
                this.timeFullSeconds = ((timeTarget.c.minute - timeCurrent.c.minute) * 60) + timeTarget.c.second - timeCurrent.c.second;
                
                //start counting
                this.timer = setInterval(()=>{
                    //get now
                    timeCurrent = DateTime.now();
                    //subtract every seconds delayed
                    this.timeCurrentSeconds = ((timeTarget.c.minute - timeCurrent.c.minute) * 60) + timeTarget.c.second - timeCurrent.c.second;
                    console.log(this.timeCurrentSeconds);
                    if(this.timeCurrentSeconds <= 0){
                        //stop timer
                        this.timerToggle = false;
                        clearInterval(this.timer);
                    }
                }, 100);
            }
            //toggle it
            this.timerToggle = !this.timerToggle;
        },
        setActive(index, isHidden){
            this.activeSlide = index; 
            this.isHidden = isHidden;
        }
    }
}).mount('#app');