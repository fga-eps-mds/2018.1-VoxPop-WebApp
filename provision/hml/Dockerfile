FROM node:8.6 as node
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build

FROM nginx:1.13
COPY --from=node /app/dist/ /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
