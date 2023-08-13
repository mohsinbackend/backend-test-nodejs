import { IsEmail, IsNotEmpty,Length } from 'class-validator';


export class RegisterUserDto {

    @IsNotEmpty()
    name: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @Length(6, 12, { message: 'The password must be at least 6 but not longer than 12 characters' })
    password: string;

}
