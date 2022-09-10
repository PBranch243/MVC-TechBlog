DELETE FROM user;
DELETE FROM post;
DELETE FROM comment;

INSERT INTO user (username, password) VALUES
('USER1', '123456'),
('User2', '123456'),
('USER_3', 'password');

INSERT INTO post (title, post_text, user_id) VALUES
('First Post Ever!', 'look at this, its the first post ever on the site!', 1),
('A sample posting', 'just trying this thing out', 2);

INSERT INTO comment (comment_text, user_id, post_id) VALUES
('You beat me to it!', 2, 0);
