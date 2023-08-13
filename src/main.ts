import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser'
import * as multer from 'multer';
global. fetch = require('node-fetch')



async function bootstrap() {
  const app = await NestFactory.create(AppModule,{
    bodyParser: true,
  });
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT)
  .then(()=>{ console.log(`Server successfully started on ${process.env.PORT} port.`) })
  .catch(err=>{ console.log(`Server faild error===============> `,err);  })

}
bootstrap();
