FROM postgres:10.7

ENV POSTGRES_USER test
ENV POSTGRES_PASSWORD test
ENV POSTGRES_DB challenge

COPY ./database-schema.sql /docker-entrypoint-initdb.d/0-database-schema.sql
COPY ./database-data.sql /docker-entrypoint-initdb.d/1-database-data.sql

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["postgres"]
