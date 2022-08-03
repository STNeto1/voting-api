import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateVoteDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  title: string;

  @ApiProperty({ type: Date, required: true })
  @IsDateString()
  start: Date;

  @ApiProperty({ type: Date, required: true })
  @IsDateString()
  end: Date;

  @ApiProperty({ type: String, required: true, isArray: true })
  @IsNotEmpty({ each: true })
  options: string[];
}
