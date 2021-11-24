// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db/db-index");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

// ! HANDLEBARS HELPERS
// const helpers = require("handlebars-helpers");
// hbs.registerHelper(helpers());

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config/config-index")(app);

// default value for title local
const projectName = "project-langeek";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const auth = require("./routes/auth.routes");
app.use("/", auth);

const posts = require("./routes/post.routes");
app.use("/", posts);

const users = require("./routes/user.routes");
app.use("/", users);

const comments = require("./routes/comment.routes");
app.use("/", comments);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling/error-index")(app);

module.exports = app;
