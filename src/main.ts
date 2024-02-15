import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { ValidationPipe } from '@nestjs/common'
import { NestExpressApplication } from '@nestjs/platform-express'
import * as basicAuth from 'express-basic-auth'
import { ConfigService } from '@nestjs/config'
import { AppModule } from './app.module'
import { Env } from './configs/env/env'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    cors: true,
    logger: ['error', 'warn'],
    autoFlushLogs: true,
  })
  app.enableCors()

  const configService = app.get<ConfigService<Env, true>>(ConfigService)

  app.useGlobalPipes(
    new ValidationPipe({
      disableErrorMessages: false,
    }),
  )

  app.use(
    [configService.get('SWAGGER_DOCS_URL')],
    basicAuth({
      challenge: false,
      users: {
        [configService.get('SWAGGER_USER_NAME')]:
          configService.get('SWAGGER_PASSWORD'),
      },
    }),
  )

  const config = new DocumentBuilder()
    .setContact(
      configService.get('SWAGGER_CONTACT_NAME'),
      configService.get('SWAGGER_CONTACT_PAGE'),
      configService.get('SWAGGER_CONTACT_EMAIL'),
    )
    .addBearerAuth()
    .addSecurityRequirements('bearer')
    .setDescription(configService.get('SWAGGER_API_DESCRIPTION'))
    .setTitle(configService.get('SWAGGER_API_TITLE'))
    .setVersion('v1.0')
    .build()

  const document = SwaggerModule.createDocument(app, config)

  SwaggerModule.setup(configService.get('SWAGGER_DOCS_URL'), app, document)

  await app.listen(
    configService.get('API_DEFAULT_PORT'),
    configService.get('API_EXTERNAL_PORT'),
  )
}
bootstrap()