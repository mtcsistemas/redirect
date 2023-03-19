"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const express = require('express');
const _open = require('open');
const app = express();
const port = process.env.PORT;
app.set('view engine', 'hbs');
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield _open('https://choiz.com.mx', { app: { name: 'google chrome', arguments: ['--incognito'] } });
    res.status(200).json({
        "redirect": true
    });
}));
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
