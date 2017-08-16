/*
  Demo Rest API
  loriacarlos@gmail.com/docs/connections
  EIF400
*/

// IMPORTS
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express(); 
var morgan     = require('morgan');
var favicon    = require('express-favicon');
var mongoose   = require('mongoose');

// APP BASIC CONFIGURATION
app.use(morgan('dev')); // log requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 8080; // set  port (default 8080)
///////////////////////////////////////////////////////////////////////////////
// CONNECT TO DB
mongoose.connect('mongodb://localhost/bears',
                 {
					 useMongoClient: true
				 } // See http://mongoosejs.com/docs/connections.html#use-mongo-client
);

// Data model
var Bear     = require('./app/models/bear');
////////////////////////////////////////////////////////////////////////////////
// API SETUP

// 1) Create router
var router = express.Router();
// 2) Config paths

// Middleware to use for all requests
router.use(function(req, res, next) {
	// 
	console.log('General middleware activated');
	next();
});

// Route to test (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
	res.json({ message: '*** Rest API is working fine! ***' });	
});

// REST API
// ON /bears
//    POST (create one)
//    GET  ( get all)
// ----------------------------------------------------
// ***** Notice the "callback hell" *****
//-----------------------------------------------------
router.route('/bears')
	// create a bear (accessed at POST http://localhost:8080/bears)
	.post( function(req, res) {
				console.log('POST requested: ' + req.body.name);
				var bear = new Bear();		// create a new instance of the Bear model
				// Extract data from request
				console.log('Post body ' + JSON.stringify(req.body))
				bear.name = req.body.name;  // set the bears name (comes from the request)
										// **** NOTICE: We should avoid potential injection *****
										// https://en.wikipedia.org/wiki/Code_injection
				bear.save(function(err) {
							if (err)
								res.send(err);
							console.log('Post Error = ' + err);
							res.json({ message: 'Bear created!', "bearId" : bear._id});
				});	
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get(function(req, res) {
		console.log('GET requested');
		Bear.find(function(err, bears) {
			        if (err)
				       res.send(err);
			        res.json(bears);
		});
	});

// ON /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

	// GET
	.get(function(req, res) {
		     Bear.findById(req.params.bear_id, 
		                   function(err, bear) {
						      if (err)
							     res.send(err);
						      res.json(bear);
		             });
	 })

	// UPDATE 
	.put(function(req, res) {
		Bear.findById(req.params.bear_id, function(err, bear) {

			if (err)
				res.send(err);

			bear.name = req.body.name;
			bear.save(function(err) {
				if (err)
					res.send(err);

				res.json({ status: 'ok', message: 'Bear updated!' });
			});

		});
	})

	// DELETE
	.delete(function(req, res) {
		Bear.remove({
			_id: req.params.bear_id
		}, function(err, bear) {
			if (err)
				res.send(err);

			res.json({ status: 'ok', message: 'Successfully deleted' });
		});
	});

///////////////////////////////////////////////////////////////////////
// APP settings
// REGISTER STATIC
// See https://expressjs.com/en/starter/static-files.html
app.use('/static', express.static((__dirname + '/public')))
//  See https://www.npmjs.com/package/express-favicon
app.use(favicon(__dirname + '/public/images/favicon.png'));

// REGISTER API ROUTER
app.use('/api', router);

//----------- START THE SERVER ---------------------
// 
app.listen(port);
console.log('*** Server is up and running on port ' + port + ' ***' );
