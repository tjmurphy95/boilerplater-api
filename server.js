const express = require("express");
const app = express();
const PORT = 8000;

const rappers = {
  "21 savage": {
    birthName: "Mr Savage",
    age: 29,
    birthLocation: "London,England",
  },
  "chance the rapper": {
    birthName: "Mr Chance",
    age: 29,
    birthLocation: "Chicago,Illinois",
  },
  unknown: {
    birthName: "unknown",
    age: "unknown",
    birthLocation: "unknown",
  },
};

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/api/:name", (req, res) => {
  const rapperName = req.params.name.toLowerCase();
  if (rappers[rapperName]) {
    res.json(rappers[rapperName]);
  } else {
    res.json(rappers["unknown"]);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
