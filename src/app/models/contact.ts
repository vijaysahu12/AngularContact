export class Contact implements IContact {
    constructor(public Name:string,public Contact :number){
    }
}

export interface IContact{
    Name: string;
    Contact: number;
}