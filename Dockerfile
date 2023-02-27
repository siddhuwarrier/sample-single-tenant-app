FROM ubuntu:20.04

WORKDIR /usr/local/cdo-api
RUN mkdir -p /usr/local/cdo-api
RUN mkdir -p /usr/local/cdo-frontend

RUN apt-get update
RUN apt install -y curl
RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt install -y nodejs build-essential
COPY package.json /usr/local/cdo-api
COPY dist/api/ /usr/local/cdo-api
RUN npm install
RUN ls /usr/local/cdo-api
COPY start_services.sh /usr/local/cdo-api

COPY dist/sample-single-tenant-app/ /usr/local/cdo-frontend
RUN DEBIAN_FRONTEND=noninteractive apt-get -yq install nginx
COPY nginx.default /etc/nginx/sites-available/default
RUN chown -R www-data /usr/local/cdo-frontend

RUN chmod a+x /usr/local/cdo-api/start_services.sh


CMD ["/usr/local/cdo-api/start_services.sh"]
