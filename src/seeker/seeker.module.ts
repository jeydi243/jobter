import { Module } from '@nestjs/common';
import { SeekerController } from './seeker.controller';
import { SeekerService } from './seeker.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeekerSchema } from './schema/seeker.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Seeker', schema: SeekerSchema }])
  ],
  controllers: [SeekerController],
  providers: [SeekerService]
})
export class SeekerModule { }