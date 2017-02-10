const utils = require('loader-utils');

function processQuery(source, options) {
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

    const options = utils.parseQuery(this.options);

    if (Array.isArray(options.multiple)) {
        options.multiple.forEach(function (opt) {
            source = processQuery(source, opt);
        });
    } else {
        source = processQuery(source, options);
    }

    return source;
};