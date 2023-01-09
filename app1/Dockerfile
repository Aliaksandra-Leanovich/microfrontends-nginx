FROM node:19-alpine3.16 as builder

COPY app1 /app

WORKDIR /app

RUN npm install
RUN npm run build

FROM nginx:alpine

COPY nginx/nginx-app.conf /etc/nginx/nginx.conf
COPY --from=builder /app/build /usr/share/nginx/html
