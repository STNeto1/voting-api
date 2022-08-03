import { IsDate, IsNotEmpty } from 'class-validator';

export class CreateVoteDto {
  @IsNotEmpty()
  title: string;

  @IsDate()
  start: Date;

  @IsDate()
  end: Date;
}
