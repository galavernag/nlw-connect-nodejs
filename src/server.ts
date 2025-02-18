import { fastifyCors } from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import { fastify } from 'fastify'

import {
  type ZodTypeProvider,
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod'
import { env } from './env'
import { generateInviteLinkRoute } from './routes/generate-invite-link'
import { subscribeToEventRoute } from './routes/subscribe-to-event'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, { origin: '*' })
app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'NLW Connect',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})
app.register(fastifySwaggerUi, { routePrefix: '/docs' })

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(subscribeToEventRoute)
app.register(generateInviteLinkRoute)

app.listen({ port: env.PORT }, () => {
  console.log('Server is runnning')
})
