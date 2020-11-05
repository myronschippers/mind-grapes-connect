import { Strategy as LocalStrategy } from 'passport-local';
import * as encryptLib from '../modules/encryption';
import pool from '../modules/pool';

const localStrategyCallback = async (email, password, done) => {
  try {
    const result = await pool.query(
      `SELECT * FROM "user"
          JOIN "login" ON "login"."user_id"="user"."id"
          WHERE "user"."email" = $1;`,
      [email]
    );

    const user = result && result.rows && result.rows[0];

    if (user && encryptLib.comparePassword(password, user.password)) {
      delete user.password;
      console.log('********>>> ', user);
      done(null, user);
    } else {
      done(null, null);
    }
  } catch (err) {
    console.log('Error with query for user ', err);
    done(err, null);
  }
};

const useLocalStrategy = (passport) => {
  passport.use('local', new LocalStrategy(localStrategyCallback));
};

export default useLocalStrategy;
