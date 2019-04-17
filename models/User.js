const mongoose = require('mongoose');

/*
 * The {timestamps: true} option creates a createdAt and updatedAt 
 * field on our models that contain timestamps which will get automatically 
 * updated when the model changes.
 */

const UserSchema = new mongoose.Schema({
    id: String,
    first_name: String,
    last_name: String,
    email: String,
    password_hash: String
}, {timestamps: true});

// Registers the UserSchema with mongoose.
mongoose.model('User', UserSchema);

/* The user model can then be accessed anywhere in the application
 * by calling 
 * mongoose.model('User').
*/