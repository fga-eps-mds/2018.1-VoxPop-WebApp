import { SocialInformationModel } from './socialInformation';

export interface UserModel {
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    social_information: {
        state: string;
        city: string;
        income: number;
        education: string;
        job: string;
        birth_date: Date;
    };
}
