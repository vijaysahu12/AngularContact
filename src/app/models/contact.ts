export class Contact implements IContact {
   
    constructor(public Name:string,public Mobile :string,public Gender:string){
    }
}

export interface IContact{
    Name: string;
    Mobile:string;
    Gender:string;
}