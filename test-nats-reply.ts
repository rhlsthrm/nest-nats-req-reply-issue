import { connect } from 'ts-nats';

async function start() {
  const nc = await connect({
    servers: ['nats://localhost:4222'],
  });

  await nc.subscribe(JSON.stringify({ cmd: 'hello' }), (err, msg) => {
    if (err) {
      throw Error(err.message);
    }
    if (msg.reply) {
      nc.publish(msg.reply, `hello there ${msg.data}`);
    }
  });
}

start();
