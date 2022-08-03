import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { VoteOption } from '@prisma/client';

export class VoteOptionEntity implements VoteOption {
  @ApiProperty()
  id: string;

  @ApiProperty()
  description: string;

  @ApiHideProperty()
  voteId: string;
}
