import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Vote } from '@prisma/client';

import { CreateVoteDto } from './dto/create-vote.dto';
import { VoteEntity } from './entities/vote.entity';
import { VoteService } from './vote.service';

@ApiTags('votes')
@Controller('api/votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  @ApiCreatedResponse({ type: VoteEntity })
  async create(@Body() createVoteDto: CreateVoteDto): Promise<Vote> {
    return this.voteService.create(createVoteDto);
  }

  @Get()
  @ApiOkResponse({ type: VoteEntity, isArray: true })
  async findAll(): Promise<Array<Vote>> {
    return this.voteService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: VoteEntity })
  async findOne(@Param('id') id: string): Promise<Vote> {
    return this.voteService.findOne(id);
  }
}
