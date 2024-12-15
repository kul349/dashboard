import express from 'express';
import session from "express-session";
import router from "./routes/routes.js";
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(session({
  secret: 'my secret key',
  saveUninitialized: true,
  resave: false
}));

// Middleware to handle session messages
app.use((req, res, next) => {
  if (req.session.messages) {
    res.locals.messages = req.session.messages; // Pass messages to views
    delete req.session.messages; // Clear messages after use
  }
  next();
});


app.set('view engine', "ejs");

// Route example
app.use('/',router)
export {app}; // Default export of app
