import { ApiProperty } from '@nestjs/swagger';
import { Vote } from '@prisma/client';
import { VoteOptionEntity } from './vote-option.entity';

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

  @ApiProperty({ type: VoteOptionEntity, isArray: true })
  options: Array<VoteOptionEntity> = [];
}
