import { Application } from './deps.ts';

import router from './routes.ts';

const PORT = 8000;

const app = new Application();

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on port ${PORT}`)

await app.listen({ port: PORT });