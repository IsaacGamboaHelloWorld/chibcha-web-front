import { endPoints } from "@/commons/constants/endPoints";
import api from "@/commons/globalService/api";
import { IDomainRequest, IHosting, IHostingParameters, INewHosting } from "../interfaces/hostingInterfaces";

const useHostingServices = () => {
  const getHosting = async (): Promise<IHosting[]> => {
    // await new Promise(resolve => {
    //   setTimeout(() => resolve(true), 1000 * 3)
    // })
    const { data } = await api.get<IHosting[]>(endPoints.hosting.hosting)
    return data;
  };

  const getOS = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.OS)
    return data;
  };

  const getDomainCompany = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.domainCompany)
    return data;
  };

  const sendDomainCompany = async (body: IDomainRequest): Promise<any> => {
    const { data } = await api.post<any>(endPoints.sendDomainRequest, body)
    return data;
  };

  const sendTicket = async (body: any): Promise<any> => {
    const { data } = await api.post<any>(endPoints.sendTicket, body)
    return data;
  };

  const getPaymentPlans = async (): Promise<any> => {
    const { data } = await api.get<any>(endPoints.paymentsPlans)
    return data;
  };

  const getParameters = async (): Promise<IHostingParameters> => {
    const { data } = await api.get<IHostingParameters>(endPoints.hosting.parameters)
    return data;
  };

  const createHosting = async (newHosting: INewHosting): Promise<any> => {
    const { data } = await api.post<any>(endPoints.hosting.hosting, newHosting);
    return data;
  };


  const calculatePrice = async (body: { host_id: number, payment_id: number }): Promise<any> => {
    const { data } = await api.post<any>(endPoints.hosting.price, body);
    return data;
  };

  const updateHostin = async (newHosting: INewHosting): Promise<any> => {
    const { data } = await api.put<any>(endPoints.hosting.hosting, newHosting);
    return data;
  };

  const deleteHostin = async (id: number): Promise<any> => {

    // await new Promise(resolve => {
    //   setTimeout(() => resolve(true), 1000 * 3)
    // })
    const { data } = await api.delete<any>(endPoints.hosting.delete + id);
    return data;
  };
  return { updateHostin, createHosting, getHosting, deleteHostin, getOS, getPaymentPlans, getParameters, calculatePrice, getDomainCompany, sendDomainCompany, sendTicket }
};

export default useHostingServices;
