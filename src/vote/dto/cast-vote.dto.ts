import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CastVoteDto {
  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  vote: string;

  @ApiProperty({ type: String, required: true })
  @IsNotEmpty()
  option: string;
}
