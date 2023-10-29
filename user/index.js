const express = require('express');
const app = express();
const userRoute = require('./src/routes/userRoutes');

app.use(express.json());
app.use('/', userRoute);

app.listen(8001, () => {
  console.log('\nServer is running on port 8001');
});
