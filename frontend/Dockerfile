

# stage 1. building and compile the frontend

FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# stage 2.Runner(here serving the html(react)file to our nginx - as we know this serving to server concept already)

FROM node:22-alpine AS runner

# //remove our deafuly nginx page
RUN rm -rf /usr/share/nginx/html/*

# //readymade builded html files to nginx btw
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]