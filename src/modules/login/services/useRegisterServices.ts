import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { ILogin } from "../interfaces/loginInterfaces";

const useRegisterServices = ()=>{
    const userRegister = async (body:{email:string,password:string,name:string,last_name: string,type: string,corporation: string,address: string,job_title: string,}): Promise<ILogin> => {
        const { data } = await api.post<ILogin>(endPoints.register.user,body);
        return data;
      };

      return {userRegister}
};

export default useRegisterServices;