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
const newModel_1 = __importDefault(require("../models/newModel"));
class NewCtrl {
    constructor() {
        this.getNews = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const noticias = yield newModel_1.default.find();
            res.json(noticias);
        });
        this.getNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const noticia = yield newModel_1.default.findById(req.params.id);
            res.json(noticia);
        });
        this.createNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const noticia = new newModel_1.default(req.body);
            yield noticia.save();
            res.json({
                message: 'Noticia guardada'
            });
        });
        this.editNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield newModel_1.default.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
            res.json({
                message: 'Noticia modificada'
            });
        });
        this.removeNew = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield newModel_1.default.findByIdAndDelete(req.params.id);
            res.json({
                message: 'Noticia eliminada.'
            });
        });
    }
}
const newCtrl = new NewCtrl();
exports.default = newCtrl;
