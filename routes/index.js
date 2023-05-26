const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Mini Messageboard', 
    messages: messages 
  });
});

// Get New Page
router.get('/new', (req,res,next) => {
  res.render('form')
});

// Post new message
router.post('/new', (req,res,next) => {
  messages.push({ 
    text: req.body.message, 
    user: req.body.author, 
    added: new Date(), 
  });
  res.redirect('/');
});


module.exports = router;
