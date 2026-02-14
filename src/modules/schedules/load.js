import {scheduleFetchByDay} from "../../services/schedule-fetch-by-day.js"
import {schedulesShow} from "../schedules/show.js"
import {hoursLoad} from "../form/hours-load.js"

const selectedDate = document.getElementById("date")
export async function scheduleDay(){
    const date = selectedDate.value

    // Busca na API os agendamento.
   const dailySchedules = await scheduleFetchByDay({date})

   // Exibe os agendamentos.
   schedulesShow({dailySchedules}) 

    // Renderiza as horas disponíveis.
    hoursLoad({date})

}