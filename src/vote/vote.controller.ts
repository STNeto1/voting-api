import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Vote } from '@prisma/client';

import { CreateVoteDto } from './dto/create-vote.dto';
import { VoteService } from './vote.service';

@Controller('api/votes')
export class VoteController {
  constructor(private readonly voteService: VoteService) {}

  @Post()
  async create(@Body() createVoteDto: CreateVoteDto): Promise<Vote> {
    return this.voteService.create(createVoteDto);
  }

  @Get()
  async findAll(): Promise<Array<Vote>> {
    return this.voteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Vote> {
    return this.voteService.findOne(id);
  }
}
