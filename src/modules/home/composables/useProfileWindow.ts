import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useHomeStore } from '../store/useAuthStore';


const currentDate = ref<string>('');
const currentHour = ref<string>('');

const setCurrentTime = (): void => {
  const date = new Date();
  const hours: string = ('0' + date.getHours()).slice(-2);
  const minutes: string = ('0' + date.getMinutes()).slice(-2);
  const year: number = date.getFullYear();
  const month: string = ('0' + (date.getMonth() + 1)).slice(-2);
  const day: string = ('0' + date.getDate()).slice(-2);
  currentDate.value = `${year}/${month}/${day}`;
  currentHour.value = `${hours}:${minutes}`;
};

const useProfileWindow = () => {
  const homeStore = useHomeStore();


  const editProfile = (): void => {
    //Cambiar nombre o imagen de usuario
  };

  setCurrentTime();



  return {
    editProfile,
    currentDate,
    currentHour,

  };
};

export default useProfileWindow;
