module.exports = {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

//runtime:"automatic is needed ceause it would throw and error"

//@babel/preset-react helps the testing library to convert the jsx into an html
