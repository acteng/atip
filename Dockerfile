FROM node:22-slim

ENV PORT=8080

WORKDIR /usr/src/app
COPY backend .

RUN npm install --production

USER node

CMD [ "sh", "-c", "npm start" ]
