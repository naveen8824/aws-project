FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install

ENV REACT_APP_EC2IP = $REACT_APP_EC2IP
EXPOSE 3000

CMD  ["npm","start"]