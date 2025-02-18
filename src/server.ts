import { fastify } from "fastify";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, { origin: "*" });

app.get("/hello", (_, reply) => {
  reply.send("world");
});

app.listen({ port: 3333 }, () => {
  console.log("Server is runnning");
});
