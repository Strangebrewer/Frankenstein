FROM node:10-alpine

ARG NODE_ENV=production

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

ENV NODE_ENV "$NODE_ENV"

RUN npm install

RUN cd client && npm install

COPY . .

RUN npm run build

EXPOSE 3001

CMD ["pm2", "start", "index.js"]
