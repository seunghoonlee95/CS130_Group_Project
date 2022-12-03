const express = require("express");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json: req.body will be json input automatically now
app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`));

// this is a route to test connection
app.get("/express_backend_test", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

//all task apis
app.use("/api/tasks", require("./routes/api/tasks"));

//user login, signup, logout
app.use("/api/auth", require("./routes/api/auth"));

//all firebase related calls
app.use("/api/database", require("./routes/api/database"));

//all user changes
app.use("/api/user", require("./routes/api/user"));

//all third party calls: stripe, google places, twilio, etc
app.use("/api/lib", require("./routes/api/lib"));
