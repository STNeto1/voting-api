import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Vote } from '@prisma/client';

import { PrismaService } from '../prisma/prisma.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Injectable()
export class VoteService {
  constructor(private prisma: PrismaService) {}

  async create(createVoteDto: CreateVoteDto): Promise<Vote> {
    return this.prisma.vote.create({
      data: {
        title: createVoteDto.title,
        start: createVoteDto.start,
        end: createVoteDto.end,
      },
    });
  }

  async findAll(): Promise<Array<Vote>> {
    return this.prisma.vote.findMany({});
  }

  async findOne(id: string): Promise<Vote> {
    const vote = await this.prisma.vote.findUnique({
      where: { id },
    });

    if (!vote) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return vote;
  }
}
