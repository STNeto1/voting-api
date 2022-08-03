import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { VoteModule } from './vote/vote.module';

@Module({
  imports: [VoteModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
