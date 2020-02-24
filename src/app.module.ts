import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SeekerModule } from './seeker/seeker.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/jobter', { useNewUrlParser: true }),
    SeekerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
