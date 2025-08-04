const express = require('express');
const morgan = require('morgan');
const jsxEngine = require('jsx-view-engine');
const methodOverride = require('method-override');

const userRoutes = require('./controllers/auth/routeController');
const colorsRouter = require('./controllers/colors/routeController');
const apiRoutes = require('./routes/apiRoutes');


const app = express();


const testController = require('./controllers/colors/testController');

app.get('/test', testController.showTestForm);
app.post('/results', testController.handleResults); 




app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());


app.use(express.json()); // For parsing application/json (API support)
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(methodOverride('_method')); // Support PUT & DELETE from forms
app.use(express.static('public')); // Serve static assets from /public
app.use(morgan('dev')); // HTTP request logger

// ===== Local Response Container =====
app.use((req, res, next) => {
  res.locals.data = {}; // Container for controller data
  next();
});

// ===== Web Routes (Render Views) =====
app.use('/users', userRoutes);
app.use('/colors', colorsRouter);

// ===== API Routes (JSON responses) =====
app.use('/api', apiRoutes);

// ===== Export App for Server or Testing =====
module.exports = app;
