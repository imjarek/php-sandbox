FROM nginx:latest
MAINTAINER exys <exyspro@ya.ru>
COPY ./conf /etc/nginx/conf.d/
# наверно это не нужно (если COPY перезаписывает директорию)
RUN rm /etc/nginx/conf.d/default.conf
