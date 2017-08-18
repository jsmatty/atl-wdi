Clue #1: SELECT name, population FROM country WHERE region = 'Southern Europe'; 
        SELECT name, population  FROM country WHERE region = 'Southern Europe' ORDER BY population ASC;
        ANSWER: Holy See (Vatican City State)

Clue #2: SELECT language FROM countrylanguage WHERE countrycode = 'VAT';
        SELECT "language" FROM countrylanguage WHERE countrycode = 'VAT';

        ANSWER: Italian

Clue #3: SELECT * FROM countrylanguage WHERE language = 'Italian' AND percentage = 100;
        
        SELECT * FROM countrylanguage WHERE "language" = 'Italian';
        ANSWER: San Marino

Clue #4: SELECT * FROM country WHERE name = 'Serravalle';
        SELECT * FROM city WHERE countrycode = 'SMR';
        ANSWER: Serravalle

Clue #5: SELECT name FROM city WHERE name LIKE '%Serra%';
        SELECT * FROM city WHERE name ILIKE '%serra%';
        ANSWER: Serra

Clue #6: SELECT capital FROM country WHERE code = 'BRA';
        SELECT capital FROM country WHERE code = 'BRA';
        SELECT * FROM city WHERE id = 211;
        ANSWER: Brasilia

Clue #7: SELECT * FROM city WHERE population = 91084;
       SELECT name, district FROM city WHERE population = 91084;
        ANSWER: Santa Monica