#!/bin/bash

service nginx start
cd /app/
npm start api &
API_PORT=80 npm start