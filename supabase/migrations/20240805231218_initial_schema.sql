create table public.greetings (
  id serial,
  text varchar(255) not null,
  language varchar(255) unique not null,
  primary key (id)
);