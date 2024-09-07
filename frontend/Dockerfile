FROM node:18-alpine

WORKDIR /user/src/app_angular

COPY package.json package-lock.json ./

RUN npm install

RUN npm install -g @angular/cli

COPY . .

COPY ./.env.production ./.env

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
