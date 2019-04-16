// load all the things we need
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// Configure the Facebook strategy for use by Passport.
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;
const FACEBOOK_URL = "https://yunet-webserver.herokuapp.com/login/facebook/callback";

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
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_URL = "https://yunet-webserver.herokuapp.com/login/google/callback";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_URL,
    passReqToCallback   : true
  }, (request, accessToken, refreshToken, profile, done) => {
    // asynchronous verification, for effect...
    console.log(profile);  
    return cb(null, profile);
}));

// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
    console.log("serializing user");
    console.log(user);
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    console.log("deserializing user");
    console.log(obj);
    cb(null, obj);
});

module.exports = passport;