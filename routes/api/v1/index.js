const router = require("express").Router();

router.use("/usuarios", require("./usuarios"));
router.use("/loja", require("./lojas"));

module.exports = router;