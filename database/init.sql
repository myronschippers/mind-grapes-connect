-- DB NAME: mind-vinyard
CREATE TABLE login (
    id SERIAL PRIMARY KEY,
    provider VARCHAR(80) NOT NULL,
    password VARCHAR(1000) NOT NULL,
    user_id INT REFERENCES "user"
);

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    display_name VARCHAR(80),
    first_name VARCHAR(80),
    last_name VARCHAR(80),
    email VARCHAR(120) UNIQUE,
    picture VARCHAR(1200),
    is_approved BOOLEAN
);

CREATE TABLE programs (
  id SERIAL PRIMARY KEY,
  label VARCHAR(100) NOT NULL,
  length_in_days INT,
  status_id INT REFERENCES "status_keys"
);

CREATE TABLE lessons (
  id SERIAL PRIMARY KEY,
  subject VARCHAR(100),
);

CREATE TABLE terms (
  id SERIAL PRIMARY KEY,
  text VARCHAR(100) NOT NULL,
  description VARCHAR(200)
);

CREATE TABLE videos (
  id SERIAL PRIMARY KEY,
  link VARCHAR(300),
  title VARCHAR(120)
);

CREATE TABLE status_keys (
  id SERIAL PRIMARY KEY,
  key VARCHAR(50)
);

-- ==============================
-- JUNCTION TABLES
-- ==============================

CREATE TABLE lessons_videos (
  id SERIAL PRIMARY KEY,
  lesson_id INT REFERENCES "lessons",
  video_id INT REFERENCES "videos"
);

CREATE TABLE terms_videos (
  id SERIAL PRIMARY KEY,
  term_id INT REFERENCES "lessons",
  video_id INT REFERENCES "videos"
);