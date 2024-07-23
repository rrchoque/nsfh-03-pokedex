import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreatePokemonDto {
    // isInt, isPositive, min 1
    @IsInt()
    @IsPositive()
    @Min(1)
    @ApiProperty()
    no: number;

    // isString, Minlenth 1
    @IsString()
    @MinLength(1)
    @ApiProperty()
    name: string;
}
