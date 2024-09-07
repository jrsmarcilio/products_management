FROM node:18-alpine

WORKDIR /user/src/app_nest

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 8001

CMD ["npm", "run", "start:prod"]