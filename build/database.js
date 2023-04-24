"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.queryProductsByName = exports.createPurchase = exports.getProduct = exports.creatProduct = exports.getAllProducts = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.user = void 0;
const types_1 = require("./types");
exports.user = [{
        id: '01',
        email: "oi@gmail.com",
        password: "12"
    },
    {
        id: '02',
        email: "ola@gmail.com",
        password: "13"
    }
];
exports.product = [
    {
        id: "21",
        name: "celular",
        price: 500,
        category: types_1.ProductCategory.ELETRONICO
    },
    {
        id: "22",
        name: "Smart TV",
        price: 900,
        category: types_1.ProductCategory.DIGITAL
    },
];
exports.purchase = [{
        userId: '01',
        productId: "22",
        quantity: 4,
        totalPrice: 3600
    },
    {
        userId: '02',
        productId: "21",
        quantity: 5,
        totalPrice: 2500
    }
];
function createUser(id, email, password) {
    exports.user.push({ id, email, password });
    return "Cadastro realizado com sucesso";
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.user;
}
exports.getAllUsers = getAllUsers;
function getAllProducts() {
    return exports.product;
}
exports.getAllProducts = getAllProducts;
function creatProduct(id, name, price, category) {
    exports.product.push({ id, name, price, category });
    return "Produto adicionado com sucesso";
}
exports.creatProduct = creatProduct;
function getProduct(idToSearch) {
    return exports.product.find((prod) => prod.id === idToSearch);
}
exports.getProduct = getProduct;
function createPurchase(userId, productId, quantity, totalPrice) {
    exports.purchase.push({ userId, productId, quantity, totalPrice });
    return "Compra realizada com sucesso";
}
exports.createPurchase = createPurchase;
function queryProductsByName(q) {
    return exports.product.filter((prod) => prod.name.toLowerCase().includes(q.toLowerCase()));
}
exports.queryProductsByName = queryProductsByName;
function getAllPurchasesFromUserId(userIdToSearch) {
    return exports.purchase.filter((purchase) => purchase.userId === userIdToSearch);
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map