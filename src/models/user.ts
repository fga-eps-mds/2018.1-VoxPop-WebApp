import { SocialInformationModel } from './socialInformation'

export interface UserModel{
    id:number,
    username:string,
    first_name:string,
    last_name:string,
    email:string,
    password:string,
    social_information:SocialInformationModel,
}