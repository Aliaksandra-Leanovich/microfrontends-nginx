FROM node:19-alpine3.16 as builder

COPY app2 /app

WORKDIR /app

RUN npm install -g @angular/cli
RUN npm install
RUN ng build --deploy-url /services

FROM nginx:alpine

COPY nginx/nginx-app.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/app2 /usr/share/nginx/html
