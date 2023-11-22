import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { ILogin } from "../interfaces/loginInterfaces";

const useLoginServices = ()=>{
    const userLogin = async (body:{email:string,password:string}): Promise<ILogin> => {
        const { data } = await api.post<ILogin>(endPoints.login.login,{email:body.email,password:body.password});
        return data;
      };

      return {userLogin}
};

export default useLoginServices;
