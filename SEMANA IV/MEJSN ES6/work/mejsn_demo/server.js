// IMPORTS
let express    = require('express');
let bodyParser = require('body-parser');
let app        = express(); 
let morgan     = require('morgan');
let favicon    = require('express-favicon');
let mongoose   = require('mongoose');

// APP BASIC CONFIGURATION
app.use(morgan('dev')); // log requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let port     = process.env.PORT || 8080; // set  port (default 8080)
///////////////////////////////////////////////////////////////////////////////
// CONNECT TO DB
mongoose.Promise = global.Promise; //Promises for mongoose

mongoose.connect('mongodb://localhost/bears',
                 {
					 useMongoClient: true
				 } // See http://mongoosejs.com/docs/connections.html#use-mongo-client
);

// Data model
let Bear     = require('./app/models/bear');
////////////////////////////////////////////////////////////////////////////////
// API SETUP

// 1) Create router
let router = express.Router();
// 2) Config paths

// Middleware to use for all requests
router.use( (req, res, next) => {
	// 
	console.log('General middleware activated');
	next();
});

// Route to test (accessed at GET http://localhost:8080/api)
router.get('/', (req, res) => {
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
	.post( (req, res) => {
				console.log('POST requested: ' + req.body.name);
				let bear = new Bear();		// create a new instance of the Bear model
				// Extract data from request
				console.log('Post body ' + JSON.stringify(req.body))
				bear.name = req.body.name;  // set the bears name (comes from the request)
										// **** NOTICE: We should avoid potential injection *****
										// https://en.wikipedia.org/wiki/Code_injection
				bear.save()
				.then((bear) =>{
					res.json({ message: 'Bear created!', "name" : bear.name, "_id" : bear._id});
				})
				.catch( (err) => {
					res.send(err);
					console.log('Post Error = ' + err);			
				});	
	})

	// get all the bears (accessed at GET http://localhost:8080/api/bears)
	.get( (req, res) => {
		console.log('GET requested');
		Bear.find()
		.then( (bears) => res.json(bears) )
		.catch( (err) => res.send(err)) 
	});

// ON /bears/:bear_id
// ----------------------------------------------------
router.route('/bears/:bear_id')

	// GET
	.get( (req, res) => {
		     Bear.findById(req.params.bear_id)
		     .then( (bear) => res.json(bear))
		     .catch( (err) => res.send(err)) 
	 })

	// UPDATE 
	.put( (req, res) => {
		let updateName = (data, req) => {return new Promise( (resolve) => data.name = req.body.name)}
		let save = (data) => {return (resolve) => data.save()}
		Bear.findById(req.params.bear_id)
		.then( (bear, req) => updateName(bear, req))
						 .then( save(res) )
						 .then( (res) => res.json({ status: 'ok', message: 'Bear updated!' }))
		.catch( (err) => res.send(err))
	})

	// DELETE
	.delete( (req, res) => {
		Bear.remove({_id: req.params.bear_id}).
		then( (res) => res.json({ status: 'ok', message: 'Successfully deleted' }))
		.catch( (err) => res.send(err) )
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
