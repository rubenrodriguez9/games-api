const games = require('../models/Games')


module.exports = {
    getAllGames: (req, res) => {
        return res.status(200).json({ confirmation: 'success', games });
      },
    createGame: (req, res) => {
        //validate inputs
        if (!req.body.name || !req.body.description || !req.body.yearReleased || !req.body.playTime) {
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'All Inputs Must Be filled' });
        }
      
        //check if game exists
        let existingGames = games.filter(
          (foundGame) => foundGame.name === req.body.name
        );
        if (existingGames.length) {
          return res.status(400).send('Game Already Exists');
        }
      
        //create a new user object
        const newGame = {};
      
        //values for newUser based on req.body inputs in postman
        newGame.name = req.body.name;
        newGame.description = req.body.description;
        newGame.yearReleased = req.body.yearReleased;
        newGame.id = String(games.length + 1);
        // add user to array
        games.push(newGame);
        //return the new user
        return res.status(200).json({ confirmation: 'sucess', newGame });
      },
       updateGame: (req, res) => {
        //grab the inputted information
        let updatedGame = req.body;
      
        //search the users array
        games.filter((foundGame) => {
          //find the game 
          if (foundGame.id === req.params.id) {
            //change values for game if inputted
            foundGame.name = updatedGame.name ? updatedGame.description : foundUser.description;
            foundGame.yearReleased = updatedGame.yearReleased 
              ? updatedGame.playTime
              : foundGame.playTime;
          }
        });
        //return array of games
        return res.status(200).json({ message: 'User Updates', games });
      },
      deleteGame: (req, res) => {
        //filter user based on id parameter in address
        let removeUser = users.filter((foundUser) => {
          return foundUser.id !== req.params.id;
        });
        //mutate users array and replace with removeUser array
        users = removeUser;
        //return results
        return res.status(200).json({ confirmation: 'success', users });
      },
      getSingleGame: (req, res) => {
        let foundUser = users.filter((user) => {
          if (user.id === req.params.id) {
            return res.status(200).json({ confirmation: 'success', user });
          }
        });
        if (!foundUser.length)
          return res
            .status(400)
            .json({ confirmation: 'fail', message: 'User Does Not Exist' });
      }
    };