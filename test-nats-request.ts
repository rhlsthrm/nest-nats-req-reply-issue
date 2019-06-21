import { connect } from 'ts-nats';

async function start() {
  const nc = await connect({
    servers: ['nats://localhost:4222'],
  });

  const msg = await nc.request(
    'hello.world',
    5000,
    JSON.stringify({ data: 'me', id: 'myid' }),
  );

  // never gets logged when using nest to reply
  console.log('msg: ', msg);
}

start();
