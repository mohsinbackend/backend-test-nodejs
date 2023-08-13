import { IsEmail, IsNotEmpty,IsDateString,IsInt,Min,Max } from 'class-validator';

export class CreateFilmDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    description: string;

    @IsDateString()
    release_date: string;

    
    // @IsInt()
    // @Min(0)
    // @Max(5)
    // rating: number;

    @IsNotEmpty()
    rating: number;



    @IsNotEmpty()
    ticket_price: number;


    @IsNotEmpty()
    country: string;

    @IsNotEmpty()
    photo: string;

    @IsNotEmpty()
    genre: string;


}
