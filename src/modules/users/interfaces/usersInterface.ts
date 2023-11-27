export interface IUser {
    job_title?:string;
    address?: string;
    corporation?: string;
    created_at: Date;
    email: string;
    id: number;
    last_name: string;
    name: string;
    password: string;
    role_id: number;
    updated_at: string | null;
    user_id: number;
  }