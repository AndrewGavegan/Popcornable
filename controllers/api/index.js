const router = require("express").Router();
const homeRoutes = require("./homeRoutes");

// /home OR / ?
router.use("/home", homeRoutes);

module.exports = router;
