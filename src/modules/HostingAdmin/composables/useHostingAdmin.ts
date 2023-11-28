import { useQuery } from "@tanstack/vue-query";
import useUsersServices from "../services/useHostingAdminServices";
import { ref } from "vue";
import useHostingAdminServices from "../services/useHostingAdminServices";

const hostinList= ref<any>()
const useHostingAdmin = () => {

    const { getHosting } = useHostingAdminServices()
    const { } = useQuery(['hostings-admin'], getHosting,
        {
            onSuccess: (data) => {
                hostinList.value =data
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })


    return {hostinList}
}

export default useHostingAdmin