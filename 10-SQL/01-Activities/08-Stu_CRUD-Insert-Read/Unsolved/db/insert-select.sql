-- TODO: What is the SQL code below doing? adding to the biographies table. then selecting the new entrys
INSERT INTO biographies (id, name)
VALUES
    ( 001, 'Diary of Anne Frank'),
    ( 002, 'Frida: A Biography of Frida Kahlo'),
    ( 003, 'Long Walk to Freedom');

SELECT * FROM biographies;
