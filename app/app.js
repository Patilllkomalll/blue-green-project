const express = require('express');
const app = express();

const PORT = 3000;
const VERSION = process.env.APP_VERSION || "BLUE";

app.get('/', (req, res) => {
  res.send("Hello from NEW VERSION");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});