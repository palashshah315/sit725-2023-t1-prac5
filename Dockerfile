FROM node:14
WORKDIR /sit725-2023-t1-prac5
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]