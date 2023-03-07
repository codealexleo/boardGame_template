const express = require('express');
const router = express.Router();
const Column = require("../models/columnsModel")
const auth = require("../middleware/auth");


router.get('/', auth.verifyAuth, async function (req, res, next) {
    try {
        if (!req.game || req.game.opponents.length == 0) {
            res.status(400).send({ msg: "You are not at a game, please create or join a game" });
        } else {
            let result = await Column.getColumns(req.game);
            res.status(result.status).send(result.result);
            }   
        
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
})
module.exports = router;