//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'test/test2.spec.js',
      'controller/*.js',
    ],

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['Chrome'],
    port: 9882,
    plugins: [
      require("karma-chrome-launcher"),
      require("karma-junit-reporter"),
			require("karma-jasmine"),
			require("karma-spec-reporter")
    ],
    browserConsoleLogOptions: {
      level: 'log',
      terminal: true
    },
    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    },
    reporters: ['spec'],
    singleRun: true
  });
};

