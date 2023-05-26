const express = require('express');
const router = express.Router();
const Message = require('./../models/Message')

/* GET home page. */
router.get('/', async (req, res, next) => {
  const messages = await Message.find();
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
router.post('/new', async (req,res,next) => {
  const message = new Message({
    user: req.body.author,
    text: req.body.message,
    added: new Date(),
  });
  await message.save();
  res.redirect('/');
});


module.exports = router;
