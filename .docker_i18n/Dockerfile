FROM node:stretch-slim

RUN apt update && apt --fix-broken install -y && apt install -y git sudo curl procps wget && \
    echo "node ALL=(ALL) NOPASSWD:ALL" >> /etc/sudoers

USER node

WORKDIR /home/translator