import { Gender } from "./Gender.enum";

export class SignUpModel 
{
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    password: string;
    gender: Gender;
    constructor()
    {
       this.gender =  Gender.Male;
       this.birthDate = new Date();
       this.password = "";  
       this.email = "";
       this.lastName = "";
       this.firstName = "";
    }
}
