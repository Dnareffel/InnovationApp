var express = require('express');
var app = express();
var innovRoutes = express.Router();

// Require Item model in our routes module
var Innov = require('../models/Innovations');

// Defined store route
innovRoutes.route('/add').post(function (req, res) {
  var innov = new Innov(req.body);
   innov.save()
    .then(item => {
    res.status(200).json({'innov': 'Innovation ajoutée'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
innovRoutes.route('/').get(function (req, res) {
  Innov.find(function (err, innov){
    if(err){
      console.log(err);
    }
    else {
      res.json(innov);
    }
  });
});

// Defined edit route
innovRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Fiche.findById(id, function (err, innov){
      res.json(innov);
  });
});

//  Defined update route
innovRoutes.route('/update/:id').post(function (req, res) {
   Fiche.findById(req.params.id, function(err, innov) {
    if (!innov)
      return next(new Error('Could not load Document'));
    else {
      innov.name = req.body.name;
      innov.author = req.body.author;
      innov.imageURL = req.body.imageURL;
      innov.description = req.body.description;
      innov.contact = req.body.contact;
      
    

      innov.save().then(innov => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
innovRoutes.route('/delete/:id').get(function (req, res) {
   Innov.findByIdAndRemove({_id: req.params.id}, function(err,innov){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = innovRoutes;