var base = require("./karma.conf.js");

module.exports = function (config) {
    "use strict";

    base(config);

    config.set({
        singleRun: true,

        browsers: ['PhantomJS'],

        plugins: [
            "karma-phantomjs-launcher",
            'karma-jasmine',
            'karma-coverage',
            'karma-jasmine-jquery'
        ]
    });
};