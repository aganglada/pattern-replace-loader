const utils = require('loader-utils');

function performReplacement(source, options) {
    const searchDefined = Boolean(options.search) || options.search === '';
    const replaceDefined = Boolean(options.replace) || options.replace === '';
    if (searchDefined && replaceDefined) {
        if (options.flags) {
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

    const optionsConfig = this.options || this.query;
    const options = typeof optionsConfig === 'object' ?
        utils.getOptions(this) : utils.parseQuery(this.query);

    if (options && options.verbose) {
        console.log('\nReplacing in file:', this.resourcePath);        
    }

    if (Array.isArray(options.multiple)) {
        options.multiple.forEach(function (opt) {
            source = performReplacement(source, opt);
        });
    } else {
        source = performReplacement(source, options);
    }

    return source;
};
