FROM 16-alpine3.16

WORKDIR /app

COPY . .

RUN npm install

CMD ["./start_services.sh"]