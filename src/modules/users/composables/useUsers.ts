import { useQuery } from "@tanstack/vue-query";
import useUsersServices from "../services/useUsersServices";

const useUsers = () => {
    const { getUsers } = useUsersServices()
    const { } = useQuery(['users'], getUsers,
        {
            onSuccess: (data) => {
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })


    return {}
}

export default useUsers