# démarrer un serv depuis nginx
FROM nginx:alpine

# executer une commande qui suppr tous les fichiers html par défaut dans nginx
RUN rm -rf /usr/share/nginx/html/*

# copie mon projet dans le dossier 
COPY . /usr/share/nginx/html

# nginx ecoute le server sur le port suivant
EXPOSE 80