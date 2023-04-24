// import { TProduct, TUser,TPurchase, ProductCategory } from "./types";

// export const user: TUser[] =[{
// id:'01',
// email:"oi@gmail.com",
// password:"12"
// },
// {
//     id:'02',
//     email:"ola@gmail.com",
//     password:"13"
// }
// ];

// export const product: TProduct[]=[
//     {
//         id:"21",
//         name:"celular",
//         price:500,
//         category:ProductCategory.ELETRONICO
//     }, 
//     {
//         id:"22",
//         name:"Smart TV",
//         price:900,
//         category:ProductCategory.DIGITAL
//     }, 
// ];

// export const purchase: TPurchase[]=[{
//     userId:'01',
//     productId:"22",
//     quantity: 4,
//     totalPrice:3600
//     },
//     {
//         userId:'02',
//         productId:"21",
//         quantity: 5,
//         totalPrice:2500
//         }
// ]

// // createUser (cria uma nova pessoa na lista de users)
// // input: três parâmetros (id, email e password)
// // output: frase de sucesso ("Cadastro realizado com sucesso")

// export function createUser(id:string, email:string, password:string):string{
//     user.push({id, email, password})
//     return "Cadastro realizado com sucesso"
// }

// // getAllUsers (busca todas as pessoas da lista de users) exercicio 2 type II
// // input: nenhum
// // output: lista atualizada de users
// export function getAllUsers():TUser[]{
//     return user
// }

// export function getAllProducts():TProduct[]{
//     return product
// }


// export function creatProduct(id:string, name:string,price:number, category:string):string{
//   product.push({id, name, price,category}) 
//   return "Produto adicionado com sucesso" 
// }

// // getProductById (busca por produtos baseado em um id da lista de products)
// // input: um parâmetro (idToSearch)
// // output: o produto encontrado ou undefined


// export function getProduct(idToSearch:string):TProduct| undefined{
//     return  product.find((prod)=> prod.id=== idToSearch)
//   }
  
//   export function createPurchase(userId:string, productId:string, quantity:number, totalPrice:number):string{
//     purchase.push({userId, productId, quantity, totalPrice})
//     return "Compra realizada com sucesso"
// }


// export function queryProductsByName(q:string):TProduct[]{
//     return product.filter((prod)=> prod.name.toLowerCase().includes(q.toLowerCase()))
// }


// export function getAllPurchasesFromUserId(userIdToSearch:string):TPurchase[] {
//     return purchase.filter((purchase)=> purchase.userId === userIdToSearch)
// }
