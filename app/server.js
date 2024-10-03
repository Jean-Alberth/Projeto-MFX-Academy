import Fastify from "fastify";

const PORT = 3000

const app = Fastify ({
    logger: true
})

app.get("/helthcheck", (request, reply)=>{
    return {"message" : "Server node is up and running"}
})

try {
    await app.listen({port : PORT})
} catch (error) {
    app.log.error("Can's start node sever with port 3000")
    process.exit(1)
}