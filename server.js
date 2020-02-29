let express = require('express');
let app = express();
let webRoutes = require('./routes/web');

/**
 * Configurations
 */

let appConfig = require('./configs/app');

// Views engine
let exphbs = require('express-handlebars');
const extNameHbs = 'hbs';
let hbs = exphbs.create({extname: extNameHbs});
app.engine(extNameHbs, hbs.engine);
app.set('view engine', extNameHbs);

/**
 * Routes
 */
app.use('/', webRoutes);

/**
 * App Init
 */
app.listen(appConfig.expressPort, () => {
  console.log(`Server is listenning on ${appConfig.expressPort}! (http://localhost:${appConfig.expressPort})`);
});
