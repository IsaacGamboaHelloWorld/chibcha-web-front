import { useMutation, useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import useTicketsAdminServices from "../services/useTicketsAdminServices";
const ticketsList = ref<any>()

const useTicketsAdmin = () => {

    const { getTickets, updateTicket } = useTicketsAdminServices()
    const {refetch } = useQuery(['tickets-admin'], getTickets,
        {
            onSuccess: (data) => {
                ticketsList.value = data
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })
    const updateTicketMutation = useMutation(['spinner'], updateTicket,
        {
            onSuccess: (data) => {
                refetch()
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })

    return { ticketsList, updateTicketMutation }
}

export default useTicketsAdmin