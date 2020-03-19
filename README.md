# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```

```js
adonis seed
```

```js

CONTAINER ID        IMAGE               COMMAND                  CREATED             STATUS              PORTS                    NAMES
2d843f4f3eab        redis:alpine        "docker-entrypoint.s…"   2 months ago        Up About a minute   0.0.0.0:6379->6379/tcp   redisatual
b69189bd91ab        postgres:11         "docker-entrypoint.s…"   2 months ago        Up 49 seconds       0.0.0.0:5432->5432/tcp   newdatause
```
