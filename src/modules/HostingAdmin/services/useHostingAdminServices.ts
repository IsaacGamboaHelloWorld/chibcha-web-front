import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useHostingAdminServices = () => {

  
  const getHosting = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.admin.hostings)
    return data;
  };

  return{
    getHosting
  }
};

export default useHostingAdminServices;
