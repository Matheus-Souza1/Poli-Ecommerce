const router = require("express").Router();

router.use("/usuarios", require("./usuarios"));
router.use("/clientes", require("./clientes"));
router.use("/lojas", require("./lojas"));

module.exports = router;