FROM node:18.13.0

WORKDIR /app

COPY ./package.json ./

RUN yarn install

COPY . .

EXPOSE 4000

CMD ["yarn", "start"]