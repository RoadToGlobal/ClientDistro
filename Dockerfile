FROM node:7

RUN mkdir -p /src/app

RUN npm install nodemon -g

WORKDIR /src/app
COPY package.json /src/app/
RUN npm install

ADD nodemon.json /src/app/nodemon.json

EXPOSE 8000
CMD npm start
