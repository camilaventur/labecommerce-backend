// import { createPurchase, createUser, creatProduct, getAllProducts, getAllPurchasesFromUserId, getAllUsers, product, purchase, queryProductsByName, user } from "./database";
import express, {Request, Response}  from "express";
// import { TProduct, TPurchase, TUser } from "./types";
import  cors from "cors"
import { db } from "./database/knex";
import knex from "knex";

// console.table(user)
// console.table(product)
// console.table(purchase);
// console.table(createUser("04","b@gmail.com", "14"));
// console.table(getAllUsers())
// console.table(creatProduct("23","xicara",900,"porcelana"))
// console.log(getAllProducts());
// console.log(createPurchase("04","23",7,99999 ));
// console.table(purchase)
// console.log(queryProductsByName("TV"));
// console.log( getAllPurchasesFromUserId("01"));

// //função para criar o servidor -Api Express exercicio 1
const app= express();
app.use(express.json());

app.use(cors());
app.listen(3003, () => {
console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req: Request, res: Response) => {
    res.send("Pong!");
  });
// // //exercicio2
//   // app.get("/users", (req: Request, res: Response) => {
//   //   res.status(200).send(user);
//   // });

//   // app.get("/products", (req: Request, res: Response) => {
//   //   res.status(200).send(product);
//   // });

  
//   // app.get('/product/search', (req: Request, res: Response) => {
//   //   const q = req.query.q as string // forçamos a tipagem aqui*
//   //   const result: TProduct[] = product.filter(
//   //   (product) => product.name.toLowerCase().includes(q.toLowerCase()))
//   //   res.status(200).send(result)
//   //   })

// // Typescript 2 /////////////////////////////////////////////////////////////////
// //Criar um enum com três categorias  ok 
// // refatore no type ok 
// ////method HTTP (POST),method HTTP (POST), body: id, email, password  status 201 "Cadastro realizado com sucesso"
// //Exercicio 2
// //
// app.post('/user', (req: Request, res: Response) => {
//   const{id, email, password}=req.body
//   const newUser:TUser={
//     id, 
//     email,
//     password
//   }  
//  user.push(newUser)
//  res.status(201).send("Curso registrado com sucesso") 
// })
// //Create Product 
// //method HTTP (POST),path ("/products"), body: id, name, price, category.status 201 "Produto cadastrado com sucesso"
// app.post('/product', (req: Request, res: Response) => {
//   const{ id, name,price, category}=req.body
//   const newProduct:TProduct={
//     id,
//     name,
//     price,
//     category
//   }
// product.push(newProduct)
//  res.status(201).send("Curso registrado com sucesso") 
// })
// //Search Product by name
// //Exercício 2
// //Create Product 
// //method HTTP (POST),path ("/products"), body: id, name, price, category.status 201 "Produto cadastrado com sucesso"
// app.get('/product', (req: Request, res: Response) => {
//   const{ id, name,price, category}=req.body
//   const newProduct:TProduct={
//     id,
//     name,
//     price,
//     category
//   }
// product.push(newProduct)
//  res.status(201).send("Produto registrado com sucesso") 
// })

// // Create Purchase
// // method HTTP (POST) path ("/purchases") body userId productId / quantity totalPriceresponse status 201
// // "Compra realizada com sucesso"
// app.post('/purchases',(req: Request, res: Response)=>{
//   const userId = req.body.userId as string
//   const productId = req.body.productId as string
//   const quantity = req.body.quantity as number
//   const totalPrice = req.body.totalPrice as number
//   const newPurchase: TPurchase = {
//       userId,
//       productId,
//       quantity,
//       totalPrice
//   }
//   purchase.push(newPurchase)
//   res.status(201).send("Compra realizada com sucesso")
//   })

//   //verificar 
  
//   app.get("/purchase", (req: Request, res: Response) => {
//     res.status(200).send(purchase);
//   });

// // 4º Exercicio - aprofundamento-express-exercicios

// // Get Products by id
// // method HTTP (GET)
// // path ("/products/:id")
// // response
// // status 200
// // objeto product encontrado

// // app.get ('/product/:id', (req: Request, res: Response) => {
// //   const{id}=req.params
// //   // console.log(id);
// //   const result = product.filter((produto)=>{
// //     return produto.id === id
// //   })
// //   res.status(200).send({recebido: result})
// // })

// // // //Get User Purchases by User id
// // app.get("/product/:id/purchase", (req: Request, res: Response)=>{
// //   const id:string = req.params.id 
// //   const result: TProduct = product.find((item)=> item.id === id)
// //   res.status(200).send(result)
//   // })
  


// //Exercício 002
// //findIndex retorna apenas o valor do index 
// //ao contrario do find que retorna {} inteiro
// //splice remove numeros especificos de um []
// //Delete User by id












// // //Exercício 5
// // // 5º exercicio - fluxo-de-dados-backend-exercicios

// // // Get All Users
// // // não precisa de validação, basta refatorar para o uso do try/catch

// // app.get('/users', (req: Request, res: Response) => {
// //   try {
// //     const users = getAllUsers();
// //     res.status(200).send(users);
// //   } catch (error) {
// //     res.status(500);
// //     res.send(error.message)
// //   }    
// // });

// // // Get All Products
// // // não precisa de validação, basta refatorar para o uso do try/catch

// // app.get('/products', (req: Request, res: Response) => {
// //   try {
// //     const products = getAllProducts();
// //     res.status(200).send(products);
// //   } catch (error) {
// //     console.error(error);
// //     res.status(500)
// //     res.send(error.message);
// //   }
// // });

/////////////////////////////////////////////intro-knex/////////////////////////////////////////
//Configure seu servidor Express para que ele se comunique com seu banco de dados
// via knex e refatore (ou recrie) os seguintes endpoints:
//Get All Users
//method HTTP (GET)
//path ("/users")
//response
//status 200
//array de users do arquivo .db
//Criando endpoints conexao KNEX
//Get All Users


// knex// 
//get all users 

app.get("/users", async(req: Request, res: Response) =>{
  try {
    const result = await db.raw('SELECT * FROM users;')
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
})
//Get All Products
app.get("/products", async(req: Request, res: Response) =>{

  try {
  const result = await db.raw('SELECT * FROM products;')
  res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
})

//Get All Products by name
app.get("/products/search", async(req: Request, res: Response) =>{

  try {
      const q = req.query.q
      const sql = `SELECT * FROM products WHERE name LIKE ?;`
      console.log(sql, [`%${q}%`])
      const result = await db.raw(sql, [`%${q}%`])
      console.log(result)
      res.status(200).send(result)
  } catch (error: any) {
      console.log(error.message)
      res.status(400).send(error.message)
  }
  }) 

// knex- exercicio 2 
//Recriando endpoints(users, products, purchases) endpoints
// CREATE USER
app.post("/users", async (req: Request, res: Response) => {
  try {
      const { id, name, email, password} = req.body;
  if (typeof id !== "string") {
      throw new Error("'id' deve ser do tipo 'string'");
  }
  if (typeof email !== "string") {
      throw new Error("'email' deve ser do tipo 'string'");
  }
  if (typeof password !== "string") {
      throw new Error("'password' deve ser do tipo 'string'");
  }
    const idExist = await db.raw(`SELECT * FROM users WHERE id = ?`, [id]);
  if (idExist.length > 0) {
      throw new Error("Já existe uma conta com esse id");
  }
  const newUser = await db.raw(
      `INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)`,
      [id, name, email, password]
  );
      res.status(200).send({ message: "Cadastro realizado com sucesso!" });
  } catch (error:any) {
      res.status(400).send(error.message);
  }
});


  //criando os produtos 
  // CREATE PRODUCT
  app.post("/products", async (req: Request, res: Response) => {

    try {
        const { id, name, price, description, imageUrl } = req.body;

    if (!id || typeof id !== "string") {
        res.status(400);
        throw new Error("'id' deve ser do tipo 'string'");
    }

    if (!name || typeof name !== "string") {
        res.status(400);
        throw new Error("'name' deve ser do tipo 'string'");
    }

    if (!price || typeof price !== "number") {
        res.status(400);
        throw new Error("'price' deve ser do tipo 'number'");
    }

    if (!description || typeof description !== "string") {
        res.status(400);
        throw new Error("'descripition' deve ser do tipo 'string'");
    }

      const idExist = await db.raw(`SELECT * FROM products WHERE id = ?`, [id]);
    if (idExist.length > 0) {
        res.status(400);
        throw new Error("Já existe um produto com esse id");
    }

    const newProduct = await db.raw(
        `INSERT INTO products (id, name, price, description, imageUrl) VALUES (?, ?, ?, ?, ?)`,
        [id, name, price, description, imageUrl]
    );
    res.status(200).send({ message: "Cadastro realizado com sucesso!" });

    } catch (error:any) {
    res.status(400).send(error.message);
    }
});

//CREATE PURCHASE
app.post("/purchases", async (req: Request, res: Response) =>{
  try {
      const { id, buyer, totalPrice, createdAt, paid } = req.body;
      console.log(id, buyer, totalPrice, paid )
  if (!id || typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser do tipo 'string'");
  }
  if (isNaN(totalPrice) ) {
      res.status(400);
      throw new Error("'o preço deve ser no formato de numeros'");
  }
  const idExist = await db.raw(`
    SELECT * FROM purchases WHERE id = "${id}";
  `)
  if (idExist.length) {
      res.status(400);
      throw new Error("Já existe um um produto com esse id");
  }
  const newPuchases = await db.raw(`
  INSERT INTO purchases(id, buyer, totalPrice, paid)
  VALUES ("${id}", "${buyer}", "${totalPrice}", "${paid}");`);
  res.status(201).send({message: "Compra cadastrada com sucesso"});
  } catch (error:any) {
      res.status(400).send(error.message);
  }
});

//Get User Purchases by User id
app.get("/users/:id/purchases", async (req: Request, res: Response) => {
  try {
  const { id } = req.params;
  const purchases = await db("purchases").select("*").where({ user_id: id });
      res.status(200).send(purchases);
  } catch (error) {
      res.status(500).send({ message: "Erro ao buscar as compras do usuário" });
  }
});



  //aprofundamento 

  //refatorando de raw para query builder
//Get All Users
app.get("/users", async(req: Request, res: Response) =>{
  try {
      const result = await db.select("*").from("users")
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
  })
//Get All Products
app.get("/products", async(req: Request, res: Response) =>{
  try {
      const result = await db.select("*").from("products")
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
  })
//Get All Products by name
app.get("/products/search", async(req: Request, res: Response) =>{
  try {
      const q = req.query.name
      const result = await db.select("*").from("products").where("name", "LIKE", `%${q}%`)
      res.status(200).send({result})
  } catch (error: any) {
      res.status(400).send(error.message)
  }
  })

 // exercicio 2
 //Crie o seguinte endpoint com query builder:
//Get Purchase by id
// app.get("/purchases/:id", async(req:Request, res:Response)=>{
//     try {
//         const id = req.params.id
//         const purchase = await db("purchases").where({id}).first();
//         const buyer = await db("users").where({id : purchase.buyer}).first();
//         const infoPurchaseUser = {
//         purchaseId: purchase.id,
//         totalPrice: purchase.totalPrice,
//         createdAt: purchase.createdAt,
//         paid: purchase.paid,
//         buyerId:buyer.id,
//         emailBuyer:buyer.email,
//         nameBuyer: buyer.name
//     }
//         res.status(200).send(infoPurchaseUser);
//     } catch (error: any) {
//         res.status(400).send(error.message)  
//     }
// })

//Refatore o endpoint criado no exercício anterior para que o resultado bem sucedido também 
//retorne a lista de produtos que tem relação com a compra pesquisada.
app.get("/purchases/:id", async(req: Request, res: Response) => {
  try {
      const id = req.params.id;
    // Busca a compra pelo ID
      const purchase = await db("purchases").where({id}).first();
  if (!purchase) {
      return res.status(404).send("Compra não encontrada");
  }
    // Busca o comprador pelo ID da compra
      const buyer = await db("users").where({id: purchase.buyer}).first();
  if (!buyer) {
      return res.status(404).send("Comprador não encontrado");
  }
    // Busca os produtos da compra
      const products = await db("products")
      .join("purchases_products", "purchases_products.product_id", "products.id")
      .where("purchases_products.purchase_id", id);
    // Cria o objeto com as informações da compra e do comprador
      const infoPurchaseUser = {
      purchaseId: purchase.id,
      totalPrice: purchase.totalPrice,
      createdAt: purchase.createdAt,
      paid: purchase.paid,
      buyerId: buyer.id,
      emailBuyer: buyer.email,
      nameBuyer: buyer.name,
      products: products
  };
      res.status(200).send(infoPurchaseUser);
  } catch (error: any) {
      res.status(400).send(error.message);
  }
});

