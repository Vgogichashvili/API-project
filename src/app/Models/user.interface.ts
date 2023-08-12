export interface Address {
    city: string;
}

export interface Company {
    name: string,
    catchPhrase:string
}

export interface userModel{
    id:number,
    name:string,
    username:string,
    phone:string,
    website:string,
    email:string,
    address: Address;
    company:Company,
}

