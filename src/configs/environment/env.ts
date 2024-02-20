import { z } from 'zod';

export const envSchema = z.object({
  // API configs
  API_VERSION: z.string().default('v1'),
  API_DEFAULT_PORT: z.string().default('3000'),
  API_EXTERNAL_PORT: z.string().default('0.0.0.0'),

  // DATABASE config
  DATABASE_URL: z.string(),

  // JWT security definitions
  JWT_PRIVATE_KEY: z.string(),
  JWT_PUBLIC_KEY: z.string(),
  JWT_SECRET_KEY_EXPIRATION: z.string(),

  // Encrypt salt complexity
  PASSWORD_SALT_COMPLEXITY: z.string(),

  // Swagger configs
  SWAGGER_API_TITLE: z.string(),
  SWAGGER_API_DESCRIPTION: z.string(),
  SWAGGER_DOCS_URL: z.string(),
  SWAGGER_USER_NAME: z.string(),
  SWAGGER_PASSWORD: z.string(),
  SWAGGER_CONTACT_NAME: z.string(),
  SWAGGER_CONTACT_EMAIL: z.string(),
  SWAGGER_CONTACT_PAGE: z.string(),
});

export type Env = z.infer<typeof envSchema>;
