import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  await app.listen(3000)
  .then(()=>{ console.log(`Server successfully started on 3000 port.`) })
  .catch(err=>{ console.log(`Server faild error===============> `,err);  })

}
bootstrap();
