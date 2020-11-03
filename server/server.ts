import express from 'express';
import bodyParser from 'body-parser';
import passport from './strategies/_root.strategy';
import sessionMiddleware from './modules/session-middleware';

require('dotenv').config();

const PORT: number | string = process.env.PORT || 5000;

const app: any = express();

//
// MIDDLEWARE
// ------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// setting cookie session storage
app.use(sessionMiddleware);
// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

//
// STATICS & ROUTES
// ------------------------------

app.use(express.static('build'));

//
// SERVER KICKOFF
// ------------------------------

app.listen(PORT, (): void => {
  console.log(`Listening on PORT: ${PORT}`);
});

export default app;
