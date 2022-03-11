FROM node:16.10-alpine
WORKDIR /usr/src/test_task_python_frontend
COPY . .
RUN apk update && apk add bash
RUN cd test_task_python_frontend &&\
    npm ci &&\
    npm run build
