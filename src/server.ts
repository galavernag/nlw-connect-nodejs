import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

import {
  validatorCompiler,
  serializerCompiler,
  ZodTypeProvider,
} from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

app.register(fastifyCors, { origin: "*" });
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/hello", (_, reply) => {
  reply.send("world");
});

app.listen({ port: 3333 }, () => {
  console.log("Server is runnning");
});
