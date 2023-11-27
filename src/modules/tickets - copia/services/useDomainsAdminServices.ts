import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useDomainsAdminServices = () => {

  
  const getDomains = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.admin.domains)
    return data;
  };

  return{
    getDomains
  }
};

export default useDomainsAdminServices;
