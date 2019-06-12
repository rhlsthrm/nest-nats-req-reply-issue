# Instructions

To reproduce the NATS bug:
- Run local NATS server on localhost:4222
```bash
$ docker pull nats:latest
$ docker run -p 4222:4222 -ti nats:latest -V
```

- Run Nest app
```bash
$ npm i
$ npm start
```

- Run test script
```bash
# install ts-node globally if it's not already
$ npm i ts-node -g
$ ts-node test-nats.ts
```

- Monitor log output on NATS server to see that the correct subscriptions are created. Monitor the Nest app logs to see that it gets into an infinite loop.