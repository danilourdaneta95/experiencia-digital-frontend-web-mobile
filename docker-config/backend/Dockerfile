# Choose and name our temporary image.
FROM alpine as intermediate

ARG SSH_KEY
ARG REPO_URL
ARG BRANCH
ARG REPO_NAME

# Install dependencies required to git clone.
RUN apk update && apk add --update git && apk add --update openssh

# 1. Create the SSH directory.
RUN mkdir -p ~/.ssh/

# 2. Populate the private key file.
RUN echo "$SSH_KEY" > ~/.ssh/id_rsa

# 3. Set the required permissions.
RUN chmod -R 600 ~/.ssh/

# 4. Add github to our list of known hosts for ssh.
RUN ssh-keyscan -t rsa bitbucket.org >> ~/.ssh/known_hosts

# inject a datestamp arg which is treated as an environment variable and
# will break the cache for the next RUN command
ARG DATE_STAMP

# Clone a repository
RUN --mount=type=ssh git clone -v "$REPO_URL" -b "$BRANCH" --single-branch

# default branch is master/main
# if you need to change the branch uncomment the following lines
RUN cd $REPO_NAME

## Build Stage ##
FROM node:12-alpine as app-local

ARG REPO_NAME
ARG BACKEND_ENV

WORKDIR /usr/src/app

LABEL name="nest-miportal-backend" version="node:12-alpine"

COPY --from=intermediate ./$REPO_NAME ./

# Creaate a .env file
RUN echo "$BACKEND_ENV" > .env

RUN apk add --no-cache \
        sudo \
        curl \
        build-base \
        g++ \
        libpng \
        libpng-dev \
        jpeg-dev \
        pango-dev \
        cairo-dev \
        giflib-dev \
        python3 \
        openssl \
        tzdata

RUN yarn install

RUN yarn build

EXPOSE 3001

ENTRYPOINT [ "yarn", "start:prod" ]