import { Gender } from "./gender.enum";
export interface User {
    id : number;
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    password: string;
    gender: Gender;
    phoneNumber: string;
    createAt : Date;
    updatedAt : Date;
}
