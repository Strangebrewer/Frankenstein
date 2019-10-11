FROM node:10-alpine

RUN mkdir -p /app

WORKDIR /app

COPY package.json ./

ENV NODE_ENV=production

RUN npm install

COPY . .

RUN cd client && npm install

RUN npm run build

EXPOSE 3001

CMD ["node", "index.js"]
