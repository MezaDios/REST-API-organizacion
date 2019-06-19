"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const newSchema = new mongoose_2.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true }
});
exports.default = mongoose_1.default.model('news', newSchema);
