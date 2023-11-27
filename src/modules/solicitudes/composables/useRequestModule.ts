import useRegisterServices from '@/modules/login/services/useRegisterServices';
import { useQuery } from '@tanstack/vue-query';
import { storeToRefs } from 'pinia';
import { computed, defineAsyncComponent } from 'vue';
import useRequestServices from '../services/useRequestServices';
import { IDomainRequest, ITicket } from '../interfaces/requestInrefaces';
import { useRequestStore } from '../store/useRequestStore';


const useRequest = () => {

  const requestStore = useRequestStore()
  const { getRequestList, getSupportList } = storeToRefs(requestStore);
  const { getRequest,getTickets } = useRequestServices()

  const { isFetching: isLoading } = useQuery(['get-Requests'], getRequest, {
    onSuccess: (data: IDomainRequest[]) => {
      requestStore.setRequestList(data)
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const { isFetching: isLoadingTicket } = useQuery(['get-Tickets'], getTickets, {
    onSuccess: (data: ITicket[]) => {
      requestStore.setSupportList(data)
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    },
  })
  return {
    getRequestList,
    getSupportList,
    isLoading,
    isLoadingTicket

  };
};

export default useRequest;
