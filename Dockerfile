# pull base image
FROM node:16.13.1-slim

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Declare all process.env variables so they can be passed in during the build
ARG REACT_APP_AWS_REGION
ENV REACT_APP_AWS_REGION $AWS_REGION
ARG REACT_APP_COGNITO_USER_POOL_ID
ENV REACT_APP_COGNITO_USER_POOL_ID $REACT_APP_COGNITO_USER_POOL_ID
ARG REACT_APP_COGNITO_IDENTITY_POOL_ID
ENV REACT_APP_COGNITO_IDENTITY_POOL_ID $REACT_APP_COGNITO_IDENTITY_POOL_ID
ARG REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID
ENV REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID $REACT_APP_COGNITO_USER_POOL_WEB_CLIENT_ID
ARG REACT_APP_USER_FILES_S3_BUCKET
ENV REACT_APP_USER_FILES_S3_BUCKET $REACT_APP_USER_FILES_S3_BUCKET
ARG REACT_APP_BACKEND_API_ENDPOINT
ENV REACT_APP_BACKEND_API_ENDPOINT $REACT_APP_BACKEND_API_ENDPOINT
ARG REACT_APP_ONESIGNAL_APP_ID
ENV REACT_APP_ONESIGNAL_APP_ID $REACT_APP_ONESIGNAL_APP_ID
ARG REACT_APP_SLACK_WEB_HOOK_URL
ENV REACT_APP_SLACK_WEB_HOOK_URL $REACT_APP_SLACK_WEB_HOOK_URL
ARG REACT_APP_AMPLITUDE_API_KEY
ENV REACT_APP_AMPLITUDE_API_KEY $REACT_APP_AMPLITUDE_API_KEY
ARG REACT_APP_DEBUG_MODE
ENV REACT_APP_DEBUG_MODE $REACT_APP_DEBUG_MODE
ARG REACT_APP_TERRA_DEV_ID
ENV REACT_APP_TERRA_DEV_ID $REACT_APP_TERRA_DEV_ID
ARG REACT_APP_TERRA_API_KEY
ENV REACT_APP_TERRA_API_KEY $REACT_APP_TERRA_API_KEY
ARG REACT_APP_HANDSHAKE_API_KEY
ENV REACT_APP_HANDSHAKE_API_KEY $REACT_APP_HANDSHAKE_API_KEY
ARG PUBLIC_URL
ENV PUBLIC_URL $PUBLIC_URL


# default to port 5000 for serve
ARG PORT=5000
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /opt/pro-fe

RUN apt-get update && apt-get install -y curl --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

HEALTHCHECK CMD curl --fail http://localhost:5000 || exit 1

COPY . .

RUN sed -i 's#@PUBLIC_URL@#'"$PUBLIC_URL"'#g' package.json

RUN yarn install --frozen-lockfile

RUN yarn global add serve

RUN yarn run build

CMD yarn run deploy
