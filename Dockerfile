FROM node:alpine

RUN mkdir /jenkins-basic-nodejs

WORKDIR /jenkins-basic-nodejs

COPY . .

EXPOSE 3000

RUN npm install

CMD npm start