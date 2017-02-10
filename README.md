# pattern-replace-loader
Pattern replace loader for [webpack](https://webpack.js.org/)

# Replace loader for 

Perform replacements (plain and regular expression) in the contents loaded by the loader.

## Install:

```bash
$ npm install --save-dev pattern-replace-loader
```

## Usage:

In general, loader allows to perform replacements in a way [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) does (loader uses it internally). For instance, it means that if you want to replace all occurences, you should use RegExp in `options.search` with `g` flag in `options.flags`, etc.

### Plain replacement:

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /filename\.js$/,
        loader: 'pattern-replace-loader',
        options: {
          search: '$variable',
          replace: 'Hello'
        }
      }
    ]
  }
}
```

### RegEx replacement:

To achieve regular expression replacement you should specify the `flags` query param
(as an empty string if you do not want any flags). In this case, `search` and `flags` are being
passed to the [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) constructor.

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /filename\.js$/,
        loader: 'pattern-replace-loader',
        options: {
          search: '$variable',
          replace: 'Hello'
        }
      }
    ]
  }
}
```

### Multiple replacement:

Also, you can pass an array of search-replace pairs this way:

In your `webpack.config.js`:

```javascript
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'pattern-replace-loader',
        query: {
          multiple: [
             { search: '$variable1', replace: 'Hello' },
             { search: '$variable2', replace: 'Bye!' }
          ]
        }
      }
    ]
  }
}
```

## Contributing:

Feel free to open issues to propose stuff and participate. Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
