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
  };

  var perSkills = {
    'team_work' : { name: 'Team Work', level: 'hundred' },
    'dedication' : { name: 'Dedication', level: 'ninety' }

  };

  var workExp = {
    'msft' : {
      title: 'SDE Intern @ Microsoft',
      date: 'MAY 2016 - JUL 2016',
      description: 'Perform frontend bug fixes as well as ship frontend component for the Yammer product.'
    },
    'rsc' : {
      title: 'WordPress Developer @ Ready Set Car',
      date: 'MAY 2015 - JUL 2015',
      description: 'Overhaul companies WordPress website and add custom geolocation features.'
    },
    'cox' : {
      title: 'Frontend Developer @ MakeMyDeal',
      date: 'JAN 2015 - AUG 2015',
      description: 'Refactor web scraping as well as perform frontend web support bug fixes.'
    },
    'ptc' : {
      title: 'Frontend Developer @ Passport to College',
      date: 'JUN 2014 - PRESENT',
      description: 'Development and maintenance of the official website for the Passport to College non-profit organization.'
    }
  };

  res.render('index', {
    title: 'Orlando Watson | Frontend Developer',
    proSkills : proSkills,
    perSkills : perSkills,
    workExp : workExp
  });
});

module.exports = router;
