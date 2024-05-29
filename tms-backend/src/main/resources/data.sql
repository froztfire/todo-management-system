INSERT INTO users (name, username, email, password)
VALUES ('eirom', 'eirom', 'eirom@gmail.com', '$2a$10$G8Cifa5sxL/d7y6Q20T9TuQow6qg6zX8vOpO/VoWGVwZtAKDvJdk6');
INSERT INTO users (name, username, email, password)
VALUES ('admin', 'admin', 'admin@gmail.com', '$2a$10$pTermOZtuSZd3CkLAmLwhu1lUw3eXLhm/M5lbYYihJVVAs6TjRWzu');


INSERT INTO roles (name)
VALUES ('ROLE_ADMIN');
INSERT INTO roles (name)
VALUES ('ROLE_USER');

--Manually Add data into users_roles table from H2-Console
--INSERT INTO users_roles (user_id, role_id)
--VALUE ('1', '2');
--INSERT INTO users_roles (user_id, role_id)
--VALUE ('2', '1');
