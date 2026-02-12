import dayjs  from "dayjs"
import {openingHours} from "../../utils/opening-hours.js"
export function hoursLoad({ date }){
    const opening = openingHours.map((hour) =>{
        // recupera somente a hora.
       const [scheduleHour] = hour.split(":")
       

        // Adiciona a hora na date e verificar se está no passado.
        const isFutureHour = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())    
    
        console.log ({
            hour,
            available: isFutureHour
            
,
        })
        
    })
}