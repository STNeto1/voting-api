import { ApiProperty } from '@nestjs/swagger';
import { VoteOption } from '@prisma/client';

export class VoteOptionEntity implements VoteOption {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  voteId: string;
}
