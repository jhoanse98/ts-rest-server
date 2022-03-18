"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.json({
        msg: 'Desde getUsuarios'
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Desde getUsuario',
        id
    });
};
exports.getUsuario = getUsuario;
const postUsuarios = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'Desde postUsuarios',
        body
    });
};
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'Desde putUsuarios',
        body
    });
};
exports.putUsuarios = putUsuarios;
const deleteUsuarios = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'Desde deleteUsuarios',
        id
    });
};
exports.deleteUsuarios = deleteUsuarios;
//# sourceMappingURL=usuario.js.map