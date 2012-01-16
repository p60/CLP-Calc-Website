var config = module.exports;

config["My tests"] = {
  environment: "browser",
  sources: [
    "../public/javascripts/vendor/jquery.js",
    "../public/javascripts/vendor/jquery-ui.min.js",
    "../public/javascripts/vendor/underscore.js",
    "../public/javascripts/vendor/backbone.js",
    "../public/javascripts/vendor/handlebars.js",
    "../public/javascripts/lib/*.js"
  ],
  tests: [
    "*-test.js"
  ]
}
