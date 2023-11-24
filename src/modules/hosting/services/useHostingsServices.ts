import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { IHosting, INewHosting } from "../interfaces/hostingInterfaces";

const useHostingServices = ()=>{
    const getHosting = async (): Promise<IHosting[]> => {
      await new Promise(resolve => {
        setTimeout(()=> resolve(true),1000 * 3)
      })
        const { data } = await api.get<IHosting[]>(endPoints.hosting.hosting, { timeout: 5000 })
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

      const deleteHostin = async (id:number): Promise<any> => {

        await new Promise(resolve => {
          setTimeout(()=> resolve(true),1000 * 3)
        })
        const { data } = await api.delete<any>(endPoints.hosting.delete + id);
        return data;
      };
      return {updateHostin,createHosting,getHosting,deleteHostin}
};

export default useHostingServices;
