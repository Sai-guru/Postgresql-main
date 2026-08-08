
# FROM node:22-alpine

# WORKDIR /app

# COPY package*.json ./

# RUN npm install

# #prisma steps here...
# COPY prisma ./prisma
# RUN npx prisma generate

# COPY . .

# RUN npm run build
# RUN npm prune --production

# EXPOSE 4000

# CMD ["node", "dist/server.js"]
# --------------------------------------------


# stage 1 .build and compile
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY prisma ./prisma/
RUN npx prisma generate

COPY . . 

RUN npm run build
RUN npm prune --production


# stage 2. Runner lightweight

FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 4000

CMD ["node", "dist/server.js"]