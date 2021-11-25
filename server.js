const express = require("express");
const cors = require("cors");
const app = express();
const Router = require("./routes/route");

app.use(cors());
app.use("/api", Router);

app.listen(4000, () => {
  console.log("server is listening on port 4000");
});
