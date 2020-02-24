export class CreateSeekerDTO {
    readonly id: number;
    readonly loginId: number;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly phone: string;
    readonly address: string;
    readonly resume: string;
    readonly description: string;
    readonly photo: string;
    readonly skills: string;
    readonly experience: string;
    createdAt: Date 
}