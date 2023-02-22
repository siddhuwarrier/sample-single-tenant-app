FROM ubuntu:20.04

RUN apt-get update
RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs build-essential
RUN DEBIAN_FRONTEND=noninteractive apt-get -yq install nginx
COPY nginx.default /etc/nginx/sites-available/default

WORKDIR /app

COPY . .
RUN chmod a+x /app/start_services.sh

RUN npm install


CMD ["/app/start_services.sh"]