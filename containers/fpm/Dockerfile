FROM php:7.0-fpm
MAINTAINER exys <exyspro@ya.ru>

RUN apt-get update && apt-get install -y \
        libmcrypt-dev \
        && apt-get install -y libpq-dev \
        && docker-php-ext-install -j$(nproc) mcrypt
        #&& pecl install mongodb \
        #&& docker-php-ext-enable mongodb
#RUN docker-php-ext-install mbstring
#RUN docker-php-ext-install exif
#RUN docker-php-ext-install opcache

#RUN docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
#    && docker-php-ext-install pgsql pdo_pgsql

RUN yes | pecl install xdebug \
    && echo "zend_extension=$(find /usr/local/lib/php/extensions/ -name xdebug.so)" > /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_enable=on" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_autostart=off" >> /usr/local/etc/php/conf.d/xdebug.ini \
    && echo "xdebug.remote_host=11.11.11.101" \ 
    && echo "xdebug.remote_port=8888" \
    && echo "xdebug.idekey=www-data" >> /usr/local/etc/php/conf.d/xdebug.ini

RUN apt-get update && \
    apt-get install -y \
        zlib1g-dev

COPY conf /usr/local/etc/php-fpm.d/
CMD ["php-fpm"]
