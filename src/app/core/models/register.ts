import { Gender } from "./gender.enum";

export interface Register {
    firstName : string;
    lastName : string;
    birthDate : Date;
    gender: Gender;
    email : string;
    password : string;
    phoneNumber : string;   
    confirmPassword : string;
}
