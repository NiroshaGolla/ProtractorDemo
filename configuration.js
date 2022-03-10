var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter')
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //directConnect: true,
    specs: ['spec1.js'],
    Capabilities:{

      "browserName":"FireFox"
      },
      onPrepare: function() {
        jasmine.getEnv().addReporter(
          new Jasmine2HtmlReporter({
            savePath: 'target/screenshots'
          })
        )},
        suites :
        {
          smoke : ['Frame.js','dropdown.js']

        },
        jasmineNodeOpts: {
          showColors: true, // Use colors in the command line report.
        }
      
  }