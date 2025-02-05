USE Book


CREATE TABLE MyBooks ( Id INT IDENTITY PRIMARY KEY,  Title VARCHAR(200) , Price INT)

--  Code Repetition


CREATE PROCEDURE getBooks
AS  -- Separate the heading and the body
BEGIN
SELECT * FROM MyBooks

END


CREATE OR ALTER  PROCEDURE addBook(@title VARCHAR(200) , @price INT)
AS
BEGIN
 INSERT INTO MyBooks(Title,Price)
 VALUES(@title, @price)
END

CREATE OR ALTER PROCEDURE getBook(@id INT)
AS
BEGIN
SELECT * FROM MyBooks WHERE Id=@id
END



EXECUTE addBook @title= "The Monk who sold His Ferrari",@price =1000;
EXEC getBooks

EXECUTE getBook 1 -- you have one argument/ parameter


DROP PROCEDURE addBook