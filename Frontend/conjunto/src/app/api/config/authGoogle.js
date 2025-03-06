require('dotenv').config();
const jwt = require('jsonwebtoken');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

// Configuración de la estrategia de autenticación con Google
passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: 'http://localhost:3005/api/auth/google/callback',
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Lógica de autenticación y creación de token
                // ...
                const token = jwt.sign({ id: profile.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
                done(null, { profile, token });
            } catch (error) {
                done(error, null);
            }
        }
    )
);

module.exports = passport;