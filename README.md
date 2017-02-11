# pattern-replace-loader
Pattern replace loader for [webpack](https://webpack.js.org/)

Perform plain string and regular expressions. 

## Install:

```bash
$ npm install --save-dev pattern-replace-loader
```

## Usage:

**Plain**: It uses [String.prototype.replace()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace) to perform replaces in file contents.

**Regex**: It will go and look for all the occurrences of what you've specified  in `options.search` with `g` flag in `options.flags`, etc.

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
          search: '[variable]',
          replace: 'Hello'
        }
      }
    ]
  }
}
```

### RegExp replacement:

To be able to use RegExp in yuor replacement you should specify `flags` in the options param. In this case, `search` and `flags` are being
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
          search: '[variable]',
          replace: 'Hello',
          flags: 'gi'
        }
      }
    ]
  }
}
```

### Multiple replacement:

Also, you can pass an array of objects of search/replace pairs this way:

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
             { search: '[variable1]', replace: 'Hello' },
             { search: '[variable2]', replace: 'Bye!' }
          ]
        }
      }
    ]
  }
}
```

## Contributing:

Feel free to open issues to propose stuff and participate. 

Pull requests are also welcome.

## Licence:

[MIT](http://en.wikipedia.org/wiki/MIT_License)
