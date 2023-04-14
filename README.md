# hw412
Код для PostgreSQL:

CREATE DATABASE "random-user-db";

CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    gender character varying(10) COLLATE pg_catalog."default",
    title character varying(10) COLLATE pg_catalog."default",
    first_name character varying(50) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default",
    street_number integer,
    street_name character varying(50) COLLATE pg_catalog."default",
    city character varying(50) COLLATE pg_catalog."default",
    state character varying(50) COLLATE pg_catalog."default",
    country character varying(50) COLLATE pg_catalog."default",
    postcode character varying(10) COLLATE pg_catalog."default",
    latitude double precision,
    longitude double precision,
    timezone_offset character varying(10) COLLATE pg_catalog."default",
    timezone_description character varying(50) COLLATE pg_catalog."default",
    email character varying(100) COLLATE pg_catalog."default",
    uuid character varying(100) COLLATE pg_catalog."default",
    username character varying(100) COLLATE pg_catalog."default",
    password character varying(100) COLLATE pg_catalog."default",
    salt character varying(100) COLLATE pg_catalog."default",
    md5 character varying(100) COLLATE pg_catalog."default",
    sha1 character varying(100) COLLATE pg_catalog."default",
    sha256 character varying(100) COLLATE pg_catalog."default",
    dob_date timestamp without time zone,
    dob_age integer,
    registered_date timestamp without time zone,
    registered_age integer,
    phone character varying(20) COLLATE pg_catalog."default",
    cell character varying(20) COLLATE pg_catalog."default",
    id_name character varying(20) COLLATE pg_catalog."default",
    id_value character varying(20) COLLATE pg_catalog."default",
    picture_large text COLLATE pg_catalog."default",
    picture_medium text COLLATE pg_catalog."default",
    picture_thumbnail text COLLATE pg_catalog."default",
    nat character(2) COLLATE pg_catalog."default"
);
