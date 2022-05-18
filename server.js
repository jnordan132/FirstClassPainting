const express = require("express");
const WebpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const PORT = process.env.PORT || 3000;

const app = express();

const htmlRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use("/", htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: "src/",
  stats: { colors: true },
}).listen(portNum, host, function (err, result) {
  if (err) {
    return console.log(err);
  }
  console.log("Listening at http://" + host + ":" + portNum + "/");
});
