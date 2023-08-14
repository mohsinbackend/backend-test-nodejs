import { IsNotEmpty } from 'class-validator';

export class CreateRateDto {

    @IsNotEmpty()
    filmId: number;

    @IsNotEmpty()
    rating: number;
}
