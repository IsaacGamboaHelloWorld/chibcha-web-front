export interface INewHosting {
    host_plan_id: number | null;
    payment_plan_id: number | null;
    operative_system_id: number | null;
    name: string;
    description:string
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
  }