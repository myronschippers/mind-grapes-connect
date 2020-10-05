import express from 'express';
import bodyParser from 'body-parser';

require('dotenv').config();

const PORT: number | string = process.env.PORT || 5000;

const app: any = express();

//
// MIDDLEWARE
// ------------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

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
