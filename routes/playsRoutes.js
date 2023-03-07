const express = require('express');
const router = express.Router();
const Play = require("../models/playsModel");
const auth = require("../middleware/auth");
router.patch('/endturn', auth.verifyAuth, async function (req, res, next) {
    try {
        console.log("Play End Turn");
        if (!req.game) {
            res.status(400).send({ msg: "You are not at a game, please create or join a game" });
        } else if (req.game.player.state.name != "Playing") {
            // Do not need to check if there are two players since in that case
            // the player will not be on Playing state
            return {
                status: 400, result: {
                    msg:
                        "You cannot end turn since you are not currently on your turn"
                }
            }
        } else {
            let result = await Play.endTurn(req.game);
            res.status(result.status).send(result.result);
        }
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
});


// TODO T4-1: Create the route code for placing the dice
// It is a patch method with path '/dices/place'
// The format is very similar to the roll dice endpoint:
// - you need a try catch
// - the user must be authenticated
// - check if the user is in a game
// - check if the user is in the "Place" state
// - call the model function

module.exports = router;