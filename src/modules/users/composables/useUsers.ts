import { useQuery } from "@tanstack/vue-query";
import useUsersServices from "../services/useUsersServices";
import { ref } from "vue";
import { IUser } from "../interfaces/usersInterface";

const useUsers = () => {

    const users = ref<IUser[]>()
    const { getUsers } = useUsersServices()
    const { } = useQuery(['users'], getUsers,
        {
            onSuccess: (data) => {
                users.value =data
                console.log(data)
            },
            onError: (error) => {
                console.log(error)
            },
        })


    return {users}
}

export default useUsers