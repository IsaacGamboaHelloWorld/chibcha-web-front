import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { IHosting, INewHosting } from "../interfaces/hostingInterfaces";

const useHostingServices = ()=>{
    const getHosting = async (): Promise<IHosting[]> => {
        const { data } = await api.get<IHosting[]>(endPoints.hosting.hosting);
        return data;
      };

      const createHosting = async (newHosting:INewHosting): Promise<any> => {
        const { data } = await api.post<any>(endPoints.login.login,newHosting);
        return data;
      };

      const updateHostin = async (newHosting:INewHosting): Promise<any> => {
        const { data } = await api.post<any>(endPoints.login.login,newHosting);
        return data;
      };
      return {updateHostin,createHosting,getHosting}
};

export default useHostingServices;
