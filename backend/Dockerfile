
FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

#prisma steps here...
COPY prisma ./prisma
RUN npx prisma generate

COPY . .

RUN npm run build
RUN npm prune --production

EXPOSE 4000

CMD ["node", "dist/server.js"]

