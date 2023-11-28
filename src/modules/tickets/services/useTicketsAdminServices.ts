import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useTicketsAdminServices = () => {

  
  const getTickets = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.admin.tickets)
    return data;
  };
  const updateTicket = async (body:{id:number; status:string}): Promise<any> => {
    const { data } = await api.put<any>(endPoints.admin.ticketsUpdate,body)
    return data;
  };
  return{
    getTickets,
    updateTicket
  }
};

export default useTicketsAdminServices;
