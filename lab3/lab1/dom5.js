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



 