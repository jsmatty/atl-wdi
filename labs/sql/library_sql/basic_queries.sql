-- BASIC QUERIES
-- Unless otherwise stated, all queries should return all columns
<<<<<<< HEAD
=======


>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37
-- Get all information about all authors
SELECT * FROM authors;
-- Get just the name and birth year of all authors
SELECT name, birth_year FROM authors;

<<<<<<< HEAD
-- Get all authors born in the 20th centruy or later
SELECT * FROM authors WHERE birth_year >= 1900;
-- Get all authors born in the USA
SELECT * FROM authors WHERE UPPER (nationality) = ('United States of America');
-- Get all books published on 1985
SELECT * FROM books WHERE publication_date = '1985';
=======
-- Get all authors born in the 20th century or later

-- Get all authors born in the USA

-- Get all books published in 1985

>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37
-- Get all books published before 1989
SELECT * FROM books WHERE publication_date <= '1989'
-- Get just the title of all books.
SELECT title FROM books;
-- Get just the year that 'A Dance with Dragons' was published
<<<<<<< HEAD
  -- Cry when you realize how long it's been
SELECT publication_date FROM books WHERE title = 'A Dance with Dragons';
SELECT publication_date FROM books WHERE UPPER(title) = UPPER('A Dance with Dragons');
=======

>>>>>>> f6a9420fe749572f73141822de567a889b5d6e37
-- Get all books which have `the` somewhere in their title (hint, look up LIKE/ILIKE)
(X)SELECT * FROM books WHERE title LIKE '%the%'
(X)'%the%' (X) '% the %' (X) '%The%'
(Y)SELECT * FROM books WHERE title LIKE '%the_%' OR title ILIKE '% the %'
(Y)ILIKE '% the %' : '... the ...'
-- Add yourself as an author
INSERT INTO authors(name, nationality, birth_year) VALUES('Jessica Matty', 'Russia', 1989);
-- Add two books that you'd like to write (you can hard-code your id as the author id)
INSERT INTO books (title, publication_date, author_id) 
VALUES ('Book title', 2001, 9), ('You don''t need', 2003, 9);
-- Update one of your books to have a new title
UPDATE books SET title = '' WHERE title = '';
-- Delete your books
DELETE FROM books WHERE title = '';
-- Delete your author entry
DELETE FROM authors WHERE name = '';