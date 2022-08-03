import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Vote } from '@prisma/client';
import { CastVoteDto } from './dto/cast-vote.dto';

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

  @Post('vote')
  @ApiNoContentResponse({})
  async castVote(@Body() data: CastVoteDto): Promise<void> {
    return this.voteService.castVote(data);
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
