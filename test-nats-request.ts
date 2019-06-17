import { connect } from 'ts-nats';

async function start() {
  const nc = await connect({
    servers: ['nats://localhost:4222'],
  });

  const msg = await nc.request(
    JSON.stringify({ cmd: 'hello' }),
    5000,
    JSON.stringify({ data: 'me' }),
  );

  // never gets logged when using nest to reply
  console.log('msg: ', msg);
}

start();
