FROM node:12-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . /app

EXPOSE 3000
USER node   
CMD ["npm", "start"] 
