FROM node:11.4-alpine
RUN apk add --no-cache python2
RUN apk --no-cache add --virtual builds-deps build-base python

ENV APP_DIR=/code
ENV DATABASEURL=mongodb://db/pp_main
RUN mkdir $APP_DIR

COPY . $APP_DIR
WORKDIR $APP_DIR
RUN npm install
EXPOSE 8080
CMD npm start
