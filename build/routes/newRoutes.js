"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const newController_1 = __importDefault(require("../controllers/newController"));
class NewRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', newController_1.default.getNews);
        this.router.get('/:id', newController_1.default.getNew);
        this.router.post('/', newController_1.default.createNew);
        this.router.put('/:id', newController_1.default.editNew);
        this.router.delete('/:id', newController_1.default.removeNew);
    }
}
const newRoutes = new NewRoutes();
exports.default = newRoutes.router;
