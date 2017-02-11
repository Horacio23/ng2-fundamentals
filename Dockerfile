FROM angular-cli:1.0.0-beta.24

ENV HOME=/home/app
ENV APP_NAME=ng2-fundamentals

# before switching to user we need to set permission properly
COPY . $HOME/$APP_NAME/
RUN chown -R app:app $HOME/*
USER app

WORKDIR $HOME/$APP_NAME
RUN npm install

EXPOSE 8808

CMD ["npm","start"]