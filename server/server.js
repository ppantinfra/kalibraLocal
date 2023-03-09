const path = require("path");
const fs = require("fs");
const express = require("express");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const App = require("@babel/register", path.join(
  __dirname,
  "..",
  "src",
  "App.tsx"
));

const PORT = 8090;
const app = express();

const router = express.Router();

require("dotenv").config();
// eslint-disable-next-line
const serverRenderer = (req, res, next) => {
  fs.readFile(path.resolve("./build/index.html"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send("An error occurred");
    }
    const app = ReactDOMServer.renderToString(React.createElement(App));

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
    );
  });
};
app.use("^/$", serverRenderer);

app.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "30d" })
);

// tell the app to use the above rules
app.use(router);

// app.use(express.static('./build'))
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
