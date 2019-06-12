import { connect } from 'ts-nats';

async function start() {
  const nc = await connect({
    servers: ['nats://localhost:4222'],
  });

  const msg = await nc.request(JSON.stringify({ cmd: 'hello' }), 5000, 'me');

  // never gets logged
  console.log('msg: ', msg);
}

start();
