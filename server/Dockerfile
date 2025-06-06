FROM node:latest as build

COPY . /app
WORKDIR /app
RUN npm install \
    && npm run prestart:prod 


FROM node:lts-alpine
COPY --from=build /app/tsconfig.json /opt/app/tsconfig.json
COPY --from=build /app/tslint.json /opt/app/tslint.json
COPY --from=build /app/dist /opt/app
COPY --from=build /app/node_modules /opt/app/node_modules
WORKDIR /opt/app

ENV NODE_ENV=product
RUN npm install pm2 -g

ENTRYPOINT ["pm2-runtime", "main.js"]
