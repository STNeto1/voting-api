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
        options: {
          create: createVoteDto.options.map((option) => ({
            description: option,
          })),
        },
      },
    });
  }

  async findAll(): Promise<Array<Vote>> {
    return this.prisma.vote.findMany({
      include: {
        options: {
          select: {
            id: true,
            description: true,
          },
        },
      },
    });
  }

  async findOne(id: string): Promise<Vote> {
    const vote = await this.prisma.vote.findUnique({
      where: { id },
      include: {
        options: {
          select: {
            id: true,
            description: true,
          },
        },
      },
    });

    if (!vote) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return vote;
  }
}
