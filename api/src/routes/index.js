const { Router } = require("express");
const {character} = require("./Characters")
const {episode} = require("./Episodes")

const router = Router();

// Configurar los routers
router.use("/character", character);
router.use("/episode", episode)

module.exports = router;
