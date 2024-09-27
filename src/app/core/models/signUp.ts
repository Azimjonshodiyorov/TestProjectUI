import { Gender } from "./gender.enum";

export interface signUp {
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    password: string;
    gender: Gender;
    phoneNumber: string;
}
