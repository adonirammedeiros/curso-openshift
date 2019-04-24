FROM node:8.16.0-alpine
WORKDIR /code
ADD . /code
EXPOSE 3000
CMD node server.js