import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { IDomainRequest, ITicket } from "../interfaces/requestInrefaces";

const useRequestServices = () => {
  const getAllRequest = async (): Promise<IDomainRequest[]> => {
    const { data } = await api.get<any>(endPoints.request.all)
    return data;
  };

  const getRequest = async (): Promise<IDomainRequest[]> => {
    const { data } = await api.get<any>(endPoints.request.byUser)
    return data;
  };

  
  const getTickets= async (): Promise<ITicket[]> => {
    const { data } = await api.get<ITicket[]>(endPoints.request.tickets)
    return data;
  };


  return { getAllRequest, getRequest,getTickets }
};

export default useRequestServices;
