\c postgres;
DROP DATABASE IF EXISTS music_db;

CREATE DATABASE music_db;

\c music_db;
CREATE TABLE artist (
  id SERIAL PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  city VARCHAR(100) NOT NULL,
  genre VARCHAR(50) NOT NULL
);

CREATE TABLE album (
  id SERIAL PRIMARY KEY,
  name VARCHAR(300) NOT NULL,
  artist_id INTEGER,
  year INTEGER NOT NULL,
  FOREIGN KEY (artist_id)  -- column_in_THIS_table
  REFERENCES artist(id)    -- table(column_in_that_table)
  ON DELETE CASCADE
);

INSERT INTO artist (name, city, genre)
VALUES
  ('The Beatles', 'Liverpool', 'Rock and Roll'), -- 1
  ('Taylor Swift', 'Nashville', 'Pop'),  -- 2
  ('Jason Isbell and the 400 Unit', 'Alabama', 'Folk Rock'), --3
  ('Madonna', 'Detroit', 'Pop'); -- 4

INSERT INTO album (name, artist_id, year)
VALUES
  ('Rubber Soul', 1, 1965),
  ('The White Album', 1, 1968),
  ('Sgt. Pepper', 1, 1967),
  ('Red', 2, 2015),
  ('Midnights', 2, 2022),
  ('Southeastern', 3, 2019),
  ('Weathervanes', 3, 2023),
  ('Like a Prayer', 4, 1993),
  ('Music', 4, 2010);
-- INSERT INTO artist (name, city, genre)
-- VALUES ('Taylor Swift', 'Nashville', 'Pop');

SELECT * from artist;

UPDATE artist SET
city='Mobile',
genre='Country'
WHERE name = 'Jason Isbell and the 400 Unit';

SELECT * FROM artist;

-- DELETE FROM artist where genre = 'Pop';

SELECT id, name FROM artist;
SELECT name, id FROM artist;

SELECT * FROM album;

SELECT
  artist.name,
  artist.genre,
  album.name, 
  album.year
FROM
  artist JOIN album ON album.artist_id = artist.id;

-- with aliased column names
SELECT
  artist.name artist,
  artist.genre,
  album.name album, 
  album.year
FROM
  artist JOIN album ON album.artist_id = artist.id;

-- with aliased column names and table names
SELECT
  s.name artiste,
  s.genre,
  r.name album, 
  r.year
FROM
  artist s JOIN album r ON r.artist_id = s.id;

-- Just get the pop albums
SELECT
  s.name artist,
  s.genre,
  r.name album, 
  r.year
FROM
  artist s JOIN album r ON r.artist_id = s.id
WHERE
  s.genre = 'Pop';

-- Count albums by artist
SELECT
  artist_id,
  count(*)
FROM
  album
GROUP BY artist_id;

-- Include artist_name in count
SELECT
  artist.name artist,
  count(*)
FROM
  artist JOIN album ON album.artist_id = artist.id
GROUP BY
  artist.name;

-- Count all ablums before the year 2000 by artist
SELECT
  artist.name artist,
  count(*)
FROM
  artist JOIN album ON album.artist_id = artist.id
WHERE
  album.year < 2000
GROUP BY
  artist.name;



