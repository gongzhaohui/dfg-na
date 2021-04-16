# Stage 1: Build Angular static assets
FROM node:lts-alpine3.13 as builder
COPY . /app
LABEL author="Zhaohui Gong"
WORKDIR /app
RUN npm install
RUN npm run build  --prod

# Stage 2: Serve Angular assets using NGINX
FROM nginx:alpine
LABEL author="Zhaohui Gong"

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/out /usr/share/nginx/html
EXPOSE 4200 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
