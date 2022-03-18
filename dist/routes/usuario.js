"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = require("../controllers/usuario");
const router = (0, express_1.Router)();
router.get('/', usuario_1.getUsuarios);
router.get('/:id', usuario_1.getUsuario);
router.post('/', usuario_1.postUsuarios);
router.put('/:id', usuario_1.putUsuarios);
router.delete('/:id', usuario_1.deleteUsuarios);
exports.default = router;
//# sourceMappingURL=usuario.js.map