var express = require('express');
var router = express.Router();

// Mock user data
users = [
  {
    username: 'gdfusion',
    id: 1
  },
  {
    username: 'bobchubby',
    id: 2
  },
  {
    username: 'davenportw15',
    id: 3
  }
];

// All users
router.get('/', function(req, res, next) {
  res.send(users);
});

// User with id
router.get('/:id', function(req, res, next) {
  var id = req.params.id;
  var user = users[id-1];
  if (user === undefined) {
    res.status(500).send({error: 'user not found'});
  }
  res.send(user);
})

module.exports = router;
