import { fastify } from "fastify";

const app = fastify();
app.get("/hello", (_, reply) => {
  reply.send("world");
});

app.listen({ port: 3333 }, () => {
  console.log("Server is runnning");
});
