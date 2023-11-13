#base image
FROM node:16.14.2-alpine as build-stage

RUN mkdir -p /usr/app/
WORKDIR /usr/app


COPY ./ ./


RUN npm install 
RUN npm start 


EXPOSE 3000
CMD ["npm", "start"]