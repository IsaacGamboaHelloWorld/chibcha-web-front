import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useTicketsAdminServices = () => {

  
  const getTickets = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.admin.tickets)
    return data;
  };

  return{
    getTickets
  }
};

export default useTicketsAdminServices;
