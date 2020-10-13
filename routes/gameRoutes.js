const express = require('express');
//create a router
const router = express.Router();
//users array
let games = require('../models/Games');

const {getAllGames, getSingleGame, createGame, updateGame, deleteGame} = require('../controllers/gameControllers')


// get all users
router.get('/all-games', getAllGames);

// get one user based on id number
router.get('/single-game/:id', getSingleGame);

router.post('/create-game', createGame);

router.put('/update-game/:id', updateGame);

//delete single user based on id parameter
router.delete('/delete-game/:id', deleteGame);

module.exports = router;
