create table if not exists users (
    id serial primary key,
    user_name varchar(180),
    img text,
    auth_id text
)
returning *;