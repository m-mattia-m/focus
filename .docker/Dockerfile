FROM node:20-alpine3.21 as builder

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

#RUN npm install --save nuxt

RUN npm install nuxt

COPY . .

RUN npm run build

EXPOSE 3000

CMD node ./.output/server/index.mjs