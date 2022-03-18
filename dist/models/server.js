"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Servidor {
    constructor() {
        this.apiPaths = {
            usersPath: '/api/usuarios'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '8080';
        this.routes();
    }
    routes() {
        this.app.use(this.apiPaths.usersPath, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("server corriendo en puerto " + "8000");
        });
    }
}
exports.default = Servidor;
//# sourceMappingURL=server.js.map