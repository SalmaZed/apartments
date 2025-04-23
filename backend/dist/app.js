"use strict";
// import express from 'express';
// const app = express();
// const port = 3000;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const apartments_1 = __importDefault(require("./routes/apartments"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 6000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/api/apartments', apartments_1.default);
app.listen(port, () => {
    console.log(`Server is waiting for requests on http://localhost:${port}`);
});
