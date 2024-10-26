FROM node:22 as build
WORKDIR app
COPY package.json /app/
COPY . /app
RUN npm install
RUN npm run build

FROM nginx
WORKDIR /usr/share/nginx/html
COPY --from=build /app/dist/ .
EXPOSE 80
EXPOSE 443
COPY deploy/nginx.conf /etc/nginx/nginx.conf
