const { Router } = require("express");
const {character} = require("./Characters")
const {Episode} = require("./Episodes")

const router = Router();

// Configurar los routers
router.use("/character", character);
router.use("/", Episode)

module.exports = router;
