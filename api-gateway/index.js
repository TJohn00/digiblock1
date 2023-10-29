const express = require("express");
const app = express();
const cors = require("cors");
const expressListEndpoints = require("express-list-endpoints");
const proxy = require("express-http-proxy");
const requireAuth = require('./src/middleware/jwtMiddleware');

app.use(express.json());
app.use(cors());
app.use(requireAuth)

app.use("/user", proxy("http://localhost:8001",{parseReqBody:true}));
app.use("/math", proxy("http://localhost:8002"));

app.listen(8000, () => {
  expressListEndpoints(app).map((path) => console.log(path.path));
  console.log("\nServer is running on port 8000");
});
