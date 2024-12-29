#!/usr/bin/bash

echo "--------------------------------------------------"
echo "              Generate environment                "
echo "--------------------------------------------------"

cp .env.template .env

echo "--------------------------------------------------"
echo "             Remove first line of .env            "
echo "--------------------------------------------------"

tail -n +2 ".env" > ".env.tmp" && mv ".env.tmp" ".env"

echo "--------------------------------------------------"
echo "      Generate certificate and save to .env       "
echo "--------------------------------------------------"

openssl ecparam -genkey -name prime256v1 -noout -out private-key.pem && cat private-key.pem | sed -e ':a' -e 'N' -e '$!ba' -e 's/\n/\\n/g' | awk '{print "NUXT_JWT_SECRET_CERT=" $0}' | cat - .env > temp && mv temp .env && rm private-key.pem
