import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";

const useLoginServices = ()=>{
    const userLogin = async (body:{email:string,password:string}): Promise<any> => {
        const { data } = await api.post<any>(endPoints.login.login,{email:body.email,password:body.password});
        return data;
      };

      return {userLogin}
};

export default useLoginServices;
