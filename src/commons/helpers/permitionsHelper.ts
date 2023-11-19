import type { IPermitions } from '../entities/global.interfaces';

const usePermitionHelper = () => {
  const hasPermitions = (code: string, permition: IPermitions): boolean => {
 
    return permition.childs!.some((permition) => permition.code === code);
  
  };
  return { hasPermitions };
};

export default usePermitionHelper;
