import {
  IsDateString,
  IsEmail,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsOptional()
  @IsDateString()
  birthAt: string;

  @IsStrongPassword({
    minLength: 6,
    minLowercase: 0,
    minUppercase: 0,
    minSymbols: 0,
  })
  password: string;
}
