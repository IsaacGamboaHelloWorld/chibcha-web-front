import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useUsersServices = () => {

  
  const getUsers = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.admin.users)
    return data;
  };

  return{
    getUsers
  }
};

export default useUsersServices;
