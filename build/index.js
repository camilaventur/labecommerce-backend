"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
console.table(database_1.user);
console.table(database_1.product);
console.table(database_1.purchase);
console.table((0, database_1.createUser)("04", "b@gmail.com", "14"));
console.table((0, database_1.getAllUsers)());
console.table((0, database_1.creatProduct)("23", "xicara", 900, "porcelana"));
console.log((0, database_1.getAllProducts)());
console.log((0, database_1.createPurchase)("04", "23", 7, 99999));
console.table(database_1.purchase);
console.log((0, database_1.queryProductsByName)("TV"));
console.log((0, database_1.getAllPurchasesFromUserId)("01"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
app.get("/ping", (req, res) => {
    res.send("Pong!");
});
app.get("/users", (req, res) => {
    res.status(200).send(database_1.user);
});
//# sourceMappingURL=index.js.map