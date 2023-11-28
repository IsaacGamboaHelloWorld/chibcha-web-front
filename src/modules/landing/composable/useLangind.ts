import { routesName } from '@/commons/constants/routes';
import { Router, useRouter } from 'vue-router';



const useLanding = ()=>{
  const router: Router = useRouter();

    const navigateToLogin = () => {
      router.push(routesName.auth.path)
    }
    return{
      navigateToLogin
    }
}

export default useLanding