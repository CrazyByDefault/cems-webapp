FROM mhart/alpine-node:10

MAINTAINER ThinkingNinja <Shashank Varanasi "es16btech11025@iith.ac.in">

ADD . /app

EXPOSE 5000

WORKDIR /app

ENV SERVICE_NAME=webapp NODE_ENV=production PORT=5000

CMD ["npm", "start"]
