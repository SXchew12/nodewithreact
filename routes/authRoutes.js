const passport = require('passport'); // require original passport module not passport.js

module.exports = (app) =>{
    app.get(
        '/auth/google',
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    })

    app.get('/api/current_user', (req,res) => {
        res.send(req.user); // make sure someone is already went through the oauth flow

    });
};