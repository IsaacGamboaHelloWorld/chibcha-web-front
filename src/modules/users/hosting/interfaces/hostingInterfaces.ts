export interface INewHosting {
  id?: number;
  host_plan_id: number | null;
  payment_plan_id: number | null;
  operative_system_id: number | null;
  name: string;
  description: string
}

export interface ICreditCard {
  name: string;
  date: string;
  securityCode: string;
  number: string;
}


export interface IHosting {
  id: number;
  customer_id: number;
  host_plan_id: number;
  payment_plan_id: number;
  operative_system_id: number;
  created_at: string;
  updated_at: string | null;
  name: string;
  plan_name: string;
  payment_name: string;
  os_name: string;
  ip: string;
  description: string;
}

export interface IOperativeSystem {
  id: number;
  os_name: string;
}

export interface IHostPlan {
  id: number;
  plan_name: string;
}

export interface IPaymentPlan {
  id: number;
  payment_name: string;
}

export interface IHostingParameters {
  operativeSystems: IOperativeSystem[];
  hostPlans: IHostPlan[];
  paymentPlans: IPaymentPlan[];
}