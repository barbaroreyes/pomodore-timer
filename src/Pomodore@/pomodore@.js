import React, { useState } from "react";
import 'tachyons'

function Pomodore2() {
    const [displayTime, setDisplayTime] =useState (25*60); 
    const [breackTime,setBreackTime] = useState(5*60)

     const formaTime = time => {
         let minutes = Math.floor(time/60)
         let seconds = time % 60
         return (
             (minutes < 10 ? "0" + minutes : minutes) + ":" +
             (seconds < 10 ? "0" + seconds : seconds) 
         )   
     }
     function Length({title,changeTime,type,time,formaTime}) {
        return (
            <div  className =''>
                <h3>{title}</h3>
               <div>
                <button  className= 'Button text '>+</button>
                <h3>{formaTime(time)}</h3>
                </div>
            </div>
        )
    }

    return (
        <div className ='bg w'>
           <Length
           title={'Breack length'}
           type={'break'}
           time={breackTime}
           formaTime={formaTime}
           />
           <h1>{formaTime(displayTime)}</h1> 
        </div>
    )
    
}

export default Pomodore2
