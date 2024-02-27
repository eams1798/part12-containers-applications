const express = require("express");
const app = express();

const port = process.env.PORT || 5173;

app.use(express.static("build"));


app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
