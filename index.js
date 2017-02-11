const utils = require('loader-utils');

function performReplacement(source, options) {
    if (options.search !== undefined && options.replace !== undefined) {
        if (options.flags !== undefined) {
            options.search = new RegExp(options.search, options.flags);
        }

        source = source.replace(options.search, options.replace);
    }

    return source;
}

module.exports = function (source) {
    if (this.cacheable) {
        this.cacheable();
    }

    const options = utils.parseQuery(this.query);

    if (Array.isArray(options.multiple)) {
        options.multiple.forEach(function (opt) {
            source = performReplacement(source, opt);
        });
    } else {
        source = performReplacement(source, options);
    }

    return source;
};