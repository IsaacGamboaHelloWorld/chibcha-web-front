import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { IDomainRequest, ITicket } from '../interfaces/requestInrefaces';


export const useRequestStore = defineStore('RequestStore', () => {
  const requestList = ref<IDomainRequest[] | null>(null)
  const supportList = ref<ITicket[] | null>(null)


  const getRequestList = computed<IDomainRequest[] | null>(() => requestList.value)
  const getSupportList = computed<ITicket[] | null>(() => supportList.value)

  const setRequestList = (newData: IDomainRequest[]) => {
    requestList.value = newData
  }
  const setSupportList = (newData: ITicket[]) => {
    supportList.value = newData
  }
  return {
    getRequestList,
    setRequestList,
    setSupportList,
    getSupportList
  };
});
