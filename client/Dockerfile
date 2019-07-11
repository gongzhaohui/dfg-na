# Stage 1: Build Angular static assets
FROM node:alpine as builder
LABEL author="Zhaohui Gong"
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build -- --output-path=./dist/out --prod

# Stage 2: Serve Angular assets using NGINX
FROM nginx:alpine
LABEL author="Zhaohui Gong"

# Copy custom nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /app/dist/out /usr/share/nginx/html
EXPOSE 4200 4200
ENTRYPOINT ["nginx", "-g", "daemon off;"]
