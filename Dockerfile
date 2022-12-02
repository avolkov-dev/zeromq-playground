FROM nikolaik/python-nodejs
COPY package*.json ./

COPY pub.ts ./
RUN yarn install
COPY pub.js ./
CMD [ "node", "pub.js" ]
