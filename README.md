# Focus

Focus is a site which should help you to stay focused. 🧘

## Features

All features are optional, you can deactivate everything during runtime.

- Different background: blank, gradient, one color, city-videos, landscape-videos
- Pomodoro
- Clock
- Simple Spotify controller
- Fullscreen
- Keyboard shortcuts

## Setup

It is recommended to use Docker for the setup. Please consider this example.

[See all versions](https://github.com/m-mattia-m/focus/pkgs/container/focus/versions)

[Example docker compose](https://github.com/m-mattia-m/focus/blob/main/docker-compose.yaml)

The authentication is JWT based. This means you must provide a secret key in form of a certificate for issuing a token.
You can generate one with the following command:

```bash
# Run bash script to generate .env file with a valid certificate
./setup.sh

# Or enter this command
cp .env.template .env && tail -n +2 ".env" > ".env.tmp" && mv ".env.tmp" ".env" && openssl ecparam -genkey -name prime256v1 -noout -out private-key.pem && cat private-key.pem | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\\n/g' | awk '{print "NUXT_JWT_SECRET_CERT=" $0}' | cat - .env > temp && mv temp .env && rm private-key.pem

# Or copy the .env.template file manually, generate a certificate and add it as this env variable: NUXT_JWT_SECRET_CERT
openssl ecparam -genkey -name prime256v1 -noout -out private-key.pem && cat private-key.pem | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\\n/g' && rm private-key.pem
```

