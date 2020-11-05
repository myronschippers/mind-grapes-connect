import passport from 'passport';
import pool from '../modules/pool';
import useLocalStrategy from './local.strategy';
import useGoogleStrategy from './google.strategy';
import useGithubStrategy from './github.strategy';

// STRATEGIES
useLocalStrategy(passport);
useGoogleStrategy(passport, '/auth/google/callback');
useGithubStrategy(passport, '/auth/github/callback');

passport.serializeUser((user, done) => {
  console.log('serializing user: ', user);
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const result = await pool.query('SELECT * FROM "user" WHERE id = $1;', [
      id,
    ]);
    const user = result && result.rows && result.rows[0];
    if (user) {
      delete user.password;
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (err) {
    console.log('Error with query during deserializing user ', err);
    done(err, null);
  }
});

export default passport;
