import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { ILogin } from "../interfaces/loginInterfaces";

const useRegisterServices = ()=>{
    const userRegister = async (body:{role_id:number,email:string,password:string,name:string,last_name: string,type: string,corporation: string,address: string,job_title: string,}): Promise<ILogin> => {
        const { data } = await api.post<ILogin>(endPoints.register.user,{role_id: body.role_id,email: body.email,password: body.password, name: body.name,last_name: body.last_name, type: body.type,corporation: body.corporation, address: body.address, job_title: body.job_title});
        return data;
      };

      return {userRegister}
};

export default useRegisterServices;