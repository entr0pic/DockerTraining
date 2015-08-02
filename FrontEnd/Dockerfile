FROM base

RUN apk --update add nodejs

#RUN npm install gulp -g

COPY WebApp /app

WORKDIR /app

EXPOSE 80

RUN npm install

CMD ["node", "app.js"]
