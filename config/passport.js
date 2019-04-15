// load all the things we need
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// Configure the Facebook strategy for use by Passport.
const FACEBOOK_CLIENT_ID = '574715039701471';
const FACEBOOK_CLIENT_SECRET = 'ab4abbf1d4417479e541dcf51455f04a';
const FACEBOOK_URL = "http://localhost:5000/login/facebook/callback";

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: FACEBOOK_URL
  }, (accessToken, refreshToken, profile, cb) => {
    console.log(profile);  
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    return cb(null, profile);
}));

// Configure the Google strategy for use by Passport.
const GOOGLE_CLIENT_ID = 'yunet-webserver';
const GOOGLE_CLIENT_SECRET = '864342206796';
const GOOGLE_URL = "http://localhost:5000/login/google/callback";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_URL,
    passReqToCallback   : true
  }, (request, accessToken, refreshToken, profile, done) => {
    // asynchronous verification, for effect...
    console.log(profile);  
    process.nextTick(function () {
      
      // To keep the example simple, the user's Google profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Google account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
));

// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

module.exports = passport;