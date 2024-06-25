FROM node:22-alpine3.18 as DEV
WORKDIR /usr/src/app

COPY package.json ./
RUN npm install

COPY . .
CMD [ "npm", "run", "start:dev" ]

EXPOSE 3000
