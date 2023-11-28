import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useDomainsAdminServices = () => {

  
  const getDomains = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.admin.domains)
    return data;
  };

  const updateDomains = async (body:{id:number; status:string}): Promise<any> => {
    const { data } = await api.put<any>(endPoints.admin.domainsUpdate,body)
    return data;
  };

  return{
    getDomains,
    updateDomains
  }
};

export default useDomainsAdminServices;
