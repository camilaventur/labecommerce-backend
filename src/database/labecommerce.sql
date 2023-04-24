-- Active: 1680125237136@@127.0.0.1@3306

/*nome da tabela: users colunas da tabela: id (TEXT, PK, único e obrigatório) email (TEXT, único e obrigatório) password (TEXT e obrigatório) */
CREATE TABLE users(
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  email TEXT NOT NULL UNIQUE,
  password  TEXT NOT NULL
);

SELECT * FROM users;

INSERT INTO users(id, email, password)
VALUES
("03", "maria@gmail.com","098"),
("04","joaquin@globo.com", "123"),
("05","angelica@globo.com", "456");

DROP TABLE users;

/*nome da tabela: products
colunas da tabela: id (TEXT, PK, único e obrigatório) name (TEXT e obrigatório)price (REAL e obrigatório) category (TEXT e obrigatório)*/
CREATE TABLE produtos(
  id TEXT PRIMARY KEY NOT NULL UNIQUE,
  name TEXT NOT NULL,
  price REAL NOT NULL,
  category TEXT NOT NULL
);

SELECT * FROM produtos;

INSERT INTO produtos (id, name, price, category)
VALUES
(23,"Notebook", 2000,"Eletronico"),
(24,"Tablet", 546,"Eletronico"),
(25,"Smart Watch", 580, "Digital"),
(26,"Smart Speaker",320,"Eletronico"),
(27,"Vídeo Game",900, "Digitado");

DROP TABLE produtos;


/*Aprofundamento SQL*/


SELECT *FROM produtos
WHERE price;

/*crie um novo usuário
insere o item mockado na tabela users */

  INSERT INTO users
  VALUES
  (006, "JOJO@gmail.com","88D");

/*crie um termo de busca, por exemplo "monitor"
retorna o resultado baseado no termo de busca */
INSERT INTO produtos
VALUES
(28,"ventilador",120,"Eletronico");

SELECT * FROM produtos
WHERE name LIKE "%ventilador";

--exercicio 2--
/*busca de produtos por id*/
SELECT * FROM produtos
WHERE id LIKE "26";

/*Delete Product by id*/
DELETE FROM produtos
WHERE id= 28;
/*Delete User by id*/
DELETE FROM users
WHERE id= 005;

/*Edit User by id*/
UPDATE users
SET 
password=122
WHERE id=004;

/*Edit Product by id*/
UPDATE produtos
SET 
name= "smart lamp"
WHERE id=26;

-- exercicio 3--
SELECT * FROM users
ORDER BY email ASC;

SELECT * FROM produtos
ORDER BY price ASC
LIMIT 20;

SELECT * FROM produtos
WHERE price BETWEEN 200 AND 590
ORDER BY price ASC;

--relações sql 1--
CREATE TABLE purchases (
    id TEXT PRIMARY KEY NOT NULL UNIQUE,
    total_price REAL NOT NULL,
    paid INTEGER NOT NULL,
    created_at TEXT ,
    buyer_id TEXT NOT NULL, Foreign Key (buyer_id) REFERENCES users(id)
);

-- a1 ao a3 é o id de comprar 
INSERT INTO purchases (id, total_price, paid,created_at,buyer_id)
VALUES
("a1",2,1,0,"03"),
("a2",2,1,0,"04"),
("a3",2,1,0,"05");

SELECT * FROM purchases;

UPDATE purchases
SET 
created_at= datetime('now','localtime'),
paid= 1
WHERE id = "a1";

UPDATE purchases
SET 
created_at= datetime('now','localtime'),
paid= 1
WHERE id = "a2";

UPDATE purchases
SET 
created_at= datetime('now','localtime'),
paid= 1
WHERE id = "a3";

DROP TABLE purchases;

---exercício 3---
SELECT * FROM purchases
INNER JOIN users
ON purchases.buyer_id = users.id;

SELECT * FROM purchases;

--relação em SQL II, criar tabela 

CREATE TABLE purchases_products(
    purchase_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INTEGER NOT NULL,
    FOREIGN KEY (purchase_id)
    REFERENCES purchases (id),
    FOREIGN KEY (product_id) 
    REFERENCES products (id)
);
INSERT INTO purchases_products(purchase_id, product_id, quantity )
VALUES
("C001","03", 1),
("C002","04", 1);


DROP  TABLE purchases_produts; 
  SELECT * FROM purchases_produtos;
   INSERT INTO purchases;

SELECT purchases_produtos.*, purchases.*, produtos.*
FROM purchases_produtos
LEFT JOIN purchases ON purchases_produtos.purchase_id = purchases.id
LEFT JOIN produtos ON purchases_produtos.produtos_id = produtos.id;

-- knex --

--Recriando a tabela de users
CREATE Table users(
id TEXT PRIMARY KEY  NOT NULL UNIQUE,
name TEXT NOT NULL,
email TEXT NOT NULL UNIQUE,
password TEXT NOT NULL,
createdAt DATE DEFAULT(DATETIME('now','localtime'))
);

SELECT * FROM users;

DROP  Table users;

--Recriando a tabela de Products
CREATE Table products(
id TEXT PRIMARY KEY NOT NULL UNIQUE,
name TEXT NOT NULL UNIQUE,
price REAL NOT NULL,
description TEXT NOT NULL,
imageUrl TEXT NOT NULL
);

SELECT *FROM products; 

DROP  TABLE products;
--Recriando a tabela Purchases
CREATE TABLE purchases(
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    buyer TEXT NOT NULL,
    totalPrice REAL NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT (datetime('now', 'localtime')),
    paid INTEGER NOT NULL,
    FOREIGN KEY (buyer) REFERENCES users(id)
);


DROP  TABLE purchases;

SELECT*FROM products; 

--3 do knex --
 
