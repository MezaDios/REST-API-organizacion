"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const newSchema = new mongoose_2.Schema({
    user: { type: String, required: true },
    password: { type: String, required: true }
});
const model = mongoose_1.default.model('users', newSchema, 'users');
exports.default = model;
