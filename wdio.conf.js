exports.config = {
  runner: "local",
  path: "/",
  specs: ["./spec/*.spec.js"],
  capabilities: [
    {
      browserName: "chrome"
    }
  ],
  logLevel: "silent",
  services: ["chromedriver"],
  framework: "jasmine",
  reporters: ["dot"],
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },
  // eslint-disable-next-line no-unused-vars
  beforeSession: (config, capabilities) => {
    /* eslint-disable-next-line global-require,import/no-extraneous-dependencies */
    require("@babel/register");
  }
};
