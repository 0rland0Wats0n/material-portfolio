var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var proSkills = {
    'html_css' : { name: 'HTML5 & CSS3', level: 'ninety' },
    'javascript' : { name: 'JavaScript', level: 'eighty' },
    'node' : { name: 'Node.js', level: 'seventy' },
    'design': { name: 'Adobe Photoshop & Illustrator', level: 'seventy' },
    'mongo' : { name: 'MongoDB', level: 'eighty' }
  }
  res.render('index', {
    title: 'Orlando Watson | Frontend Developer',
    proSkills : proSkills 
  });
});

module.exports = router;
