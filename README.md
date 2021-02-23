# 🔬 pattern-replace-loader
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

Pattern replace loader for [webpack](https://webpack.js.org/)

Perform plain string and regular expressions. 

## Install:

```bash
$ npm install --save-dev pattern-replace-loader
```

or using yarn

```bash
$ yarn add pattern-replace-loader --dev
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
        options: {
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

### Verbose output:
You can enable verbose output to check which files have been processed by the replace loader.
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
          verbose: true,
          search: '[variable]',
          replace: 'Hello'
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

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://aganglada.com"><img src="https://avatars.githubusercontent.com/u/922348?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Alejandro Garcia Anglada</b></sub></a><br /><a href="https://github.com/aganglada/pattern-replace-loader/commits?author=aganglada" title="Code">💻</a> <a href="#ideas-aganglada" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!