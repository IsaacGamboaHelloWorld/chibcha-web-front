import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { IUser } from "../interfaces/usersInterface";

const useUsersServices = () => {

  
  const getUsers = async (): Promise<IUser[]> => {
    const { data } = await api.get<IUser[]>(endPoints.admin.users)
    return data;
  };

  return{
    getUsers
  }
};

export default useUsersServices;
