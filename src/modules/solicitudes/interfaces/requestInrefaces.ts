export interface IDomainRequest {
    id: number;
    host_id: number;
    domain_distributor_id: number;
    domain: string;
    created_at: string;
    updated_at: string | null;
    state: string;
    customer_id: number;
    host_plan_id: number;
    payment_plan_id: number;
    operative_system_id: number;
    name: string;
    description: string;
    ip: string;
    host_name: string;
    domain_distribuitors_name: string
}

export interface ITicket {
    id: number;
    host_id: number;
    status: string;
    created_at: string;
    updated_at: string | null;
    problem: string;
    customer_id: number;
    host_plan_id: number;
    payment_plan_id: number;
    operative_system_id: number;
    name: string;
    description: string;
    ip: string;
    host_name: string;
}