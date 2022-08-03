import { ApiProperty } from '@nestjs/swagger';
import { Vote } from '@prisma/client';

export class VoteEntity implements Vote {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  start: Date;

  @ApiProperty()
  end: Date;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
