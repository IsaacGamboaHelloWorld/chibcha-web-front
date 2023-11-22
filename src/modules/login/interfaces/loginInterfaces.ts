export interface ILogin {
    token:string;
    infoUser:{
        id: number,
        role_id: number,
        email: string,
        name:string,
        last_name: string,
        password: string,
        created_at: string,
        updated_at: string
    }

}