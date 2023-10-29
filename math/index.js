const express = require('express');
const app = express();
const mathRoute = require('./src/routes/mathRoutes');

app.use(express.json());
app.use('/', mathRoute);

app.listen(8002, () => {
  console.log('\nServer is running on port 8002');
});
