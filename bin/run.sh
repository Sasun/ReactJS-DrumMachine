#!/bin/bash
while read line; do export "$line";
done < .env

nodemon --ignore public app.js