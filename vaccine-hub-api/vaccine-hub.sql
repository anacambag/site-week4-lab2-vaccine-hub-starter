
\echo 'Delete and recreate vaccine_hub database' --letting user know that data will be lost permanently

\prompt 'Return for yes or control-c to cancel > ' answer -- if prompt accepted creates vaccine db

DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

\i vaccine-hub-schema.sql