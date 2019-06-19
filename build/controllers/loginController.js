"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/userModel"));
class LoginCtrl {
    constructor() {
        this.createUser = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const user = yield new userModel_1.default(req.body);
            yield user.save();
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const users = yield userModel_1.default.find(req.body);
            if (users.length == 0) {
                res.json({
                    logged: false
                });
            }
            else {
                res.json({
                    logged: true
                });
            }
        });
    }
}
const loginCtrl = new LoginCtrl();
exports.default = loginCtrl;
