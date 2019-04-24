// load all the things we need
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;

// Configure the Facebook strategy for use by Passport.
const FACEBOOK_CLIENT_ID = process.env.FACEBOOK_CLIENT_ID;
const FACEBOOK_CLIENT_SECRET = process.env.FACEBOOK_CLIENT_SECRET;
const FACEBOOK_URL = "/login/facebook/callback";

passport.use(new FacebookStrategy({
    clientID: FACEBOOK_CLIENT_ID,
    clientSecret: FACEBOOK_CLIENT_SECRET,
    callbackURL: FACEBOOK_URL
  }, (accessToken, refreshToken, profile, done) => {
    // asynchronous verification, for effect...
    console.log(profile);  
    done(null, profile);
}));

// Configure the Google strategy for use by Passport.
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const GOOGLE_URL = "/login/google/callback";

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_URL,
    passReqToCallback   : true
  }, (request, accessToken, refreshToken, profile, done) => {
    // asynchronous verification, for effect...
    console.log(profile);  
    return done(null, profile);
  }
));

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