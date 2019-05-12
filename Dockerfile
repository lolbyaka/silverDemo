### https://nodejs.org/de/docs/guides/nodejs-docker-webapp/

FROM mhart/alpine-node:11
# Create app directory
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install --global serve
COPY . .
CMD ["serve", "-p", "3000", "-s", "build"]
EXPOSE 3000