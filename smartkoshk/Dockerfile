FROM node:14.19.3

WORKDIR /React_smart_koshk

COPY package.json .

RUN npm install --force

COPY . .

EXPOSE 3070

CMD ["npm","run","start"]