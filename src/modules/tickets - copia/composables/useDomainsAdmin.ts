import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";
import useDomainsAdminServices from "../services/useDomainsAdminServices";

const useDomainsAdmin = () => {

    const DomainsList= ref<any>()
    const { getDomains } = useDomainsAdminServices()
    const { } = useQuery(['Domains-admin'], getDomains,
        {
            onSuccess: (data) => {
                DomainsList.value =data
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })


    return {DomainsList}
}

export default useDomainsAdmin