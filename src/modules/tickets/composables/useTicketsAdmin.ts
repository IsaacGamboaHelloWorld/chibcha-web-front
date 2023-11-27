import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import useTicketsAdminServices from "../services/useTicketsAdminServices";

const useTicketsAdmin = () => {

    const ticketsList= ref<any>()
    const { getTickets } = useTicketsAdminServices()
    const { } = useQuery(['tickets-admin'], getTickets,
        {
            onSuccess: (data) => {
                ticketsList.value =data
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })


    return {ticketsList}
}

export default useTicketsAdmin