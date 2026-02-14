import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedules-new.js"
import {scheduleDay} from "../schedules/load.js"


const form = document.querySelector("form") 
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")

// Date atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


//carregada a data atual e define a data mínima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday


form.onsubmit = async (event) =>{
    event.preventDefault()

    try {
        const name = clientName.value.trim()

        if(!name){
            return alert("Informe o nome do cliente!")
        }

        // recupera o horário selecionado.
        const hourSelected = document.querySelector(".hour-selected")
    
        
        if(!hourSelected){
            return alert("Selecione a hora.")
        }

        const [hour] = hourSelected.innerText.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        // faz o agendamento.
        await scheduleNew({
            id,
            name,
            when,
        })

        // Recarrega o agendamento
        await scheduleDay()

        clientName.value = ""

    } catch (error) {
        alert("Não foi possivel realizar o agendamento")
        console.log(error)
    }



}