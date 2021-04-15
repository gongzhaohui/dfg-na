FROM node:alpine as build

COPY . /app
WORKDIR /app
RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*
RUN yarn && \
    yarn cache clean && \
    yarn run build 
    

FROM node:alpine
COPY --from=build /app/tsconfig.json /opt/app/tsconfig.json
COPY --from=build /app/tslint.json /opt/app/tslint.json
COPY --from=build /app/dist /opt/app
COPY --from=build /app/node_modules /opt/app/node_modules
WORKDIR /opt/app

ENV NODE_ENV=development
RUN npm install pm2 -g

ENTRYPOINT ["pm2-runtime", "main.js"]
