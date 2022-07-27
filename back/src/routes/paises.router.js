const { Router } = require("express");

const router = Router();

const paisesCtrl = require("../controllers/paises.controller");

//Consultar todos los empleados
router.get("/paises", paisesCtrl.getPaises);

//Consultar empleado
router.get("/paises/:id", paisesCtrl.getPais);

//Crear empleado
router.post("/paises", paisesCtrl.createPaises);

//Actualizar empleado
router.put("/paises/:id", paisesCtrl.editPaises);

//Eliminar empleado
router.delete("/paises/:id", paisesCtrl.deletePaises);

module.exports = router;
