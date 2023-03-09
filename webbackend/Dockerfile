FROM node:16.16.0
#RUN apt-get update && apt-get install -y dumb-init


# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
#ARG NODE_ENV=production
#ENV NODE_ENV $NODE_ENV

# default to port 3000 for serve
ARG PORT=5445
ENV PORT $PORT
EXPOSE $PORT

WORKDIR /opt/pro-be

COPY . .

RUN npm i --legacy-peer-deps
RUN npm i --save-dev @types/cors
RUN npm run build

#CMD npm start
CMD npm run serve
