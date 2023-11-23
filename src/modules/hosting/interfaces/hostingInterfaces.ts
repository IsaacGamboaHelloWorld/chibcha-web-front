export interface INewHosting {
    host_plan_id: string;
    payment_plan_id: string;
    operative_system_id: string;
    name: string;
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