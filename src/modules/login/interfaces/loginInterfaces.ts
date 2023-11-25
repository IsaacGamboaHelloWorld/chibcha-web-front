export interface ILogin {
    token:string;
    infoUser:{
        id: number,
        role_id: number,
        email: string,
        name:string,
        last_name: string,
        password: string,
        type: string,
        corporation: string,
        address: string,
        job_title: string,
        created_at: string,
        updated_at: string
    }

}