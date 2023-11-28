import { useMutation, useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import useDomainsAdminServices from "../services/useDomainsAdminServices";
const DomainsList= ref<any>()
const useDomainsAdmin = () => {
    const { getDomains,updateDomains } = useDomainsAdminServices()
    const { refetch } = useQuery(['Domains-admin'], getDomains,
        {
            onSuccess: (data) => {
                DomainsList.value =data
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })
        const updateDomainMutation = useMutation(['spinner'], updateDomains,
        {
            onSuccess: (data) => {
                refetch()
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })


    return {DomainsList,updateDomainMutation}
}

export default useDomainsAdmin