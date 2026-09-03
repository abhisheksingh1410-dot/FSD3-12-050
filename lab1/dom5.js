<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
import { time } from "console";
import {EventEmitter} from "events";
class DomClass extends EventEmitter{
    addEventListener(event,callback){
        this.on(event,callback);
    }
    removeEventListener(event,callback){
        this.off(event,callback);
    }
     dispatchEvent(eventName,eventData = {}){
        const event ={
            type:eventName,
            time: new Date(),
            ...eventData,
        };
        this.emit(eventName,event);
        }
    
    }

    const button = new DomClass();
    const handleClick = (event) => {
        console.log(`button clicked type ${event.type} at ${event.timespam}`);

    }
    button.addEventListener("click",handleClick);
    button.dispatchEvent("click",{
        target:"submit button",
    });

    button.removeEventListener("click",handleClick);
        button.dispatchEvent("click",{
            target:"resetbtn"
        });



<<<<<<< HEAD
 
=======
import { EventEmitter } from "events";

class DomClass extends EventEmitter{
    addEventListener(eventName,callback){
        this.on(eventName,callback);
    }
    removeEventListener(eventName,callback){
        this.off(eventName,callback);
    }
    dispatchEvent(eventName,eventData = {}){
        const event={
            type:eventName,
            timespam=new Data(),
            ...eventData,
        };
        this.emit(eventName,event);
    }
}

const button=new DomClass();
const handleClick=(event)=>{
    console.log(`Button clicked type: ${event.type} at ${event.timespam}`);
}

button.addEventListener('click',handleClick);
button.dispatchEvent("click",{
    target: "resetBtn",
});

>>>>>>> d9737ee1628a04b77e3a21791ed47495e22058d2
=======
 
>>>>>>> 1efc4595aeb0074adcaa15257b28b5a1278b2dac
