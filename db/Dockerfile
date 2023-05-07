# start with a node image
FROM node:16.9.1

WORKDIR /app

# copy everything into the image's work dir
COPY . /app

# env vars
#COPY envs/prod.env /app/.env
#RUN ["rm", "-rf", "envs/"]

# install deps
RUN ["npm", "ci"]

# build project
RUN ["npm", "run", "build"]

# start application
CMD ["npm", "run", "start-no-build"]
