# humanize-ordinal

Tiny ordinal humanization utilizing `Intl.PluralRules`.

* [ECMA-402: `Intl.PluralRules` spec](https://tc39.github.io/ecma402/#pluralrules-objects)
* [Can I use `Intl.PluralRules`?](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules#Browser_compatibility)
* [`Intl.PluralRules` shim](https://github.com/eemeli/intl-pluralrules)

## Up and running

Get the package from [npm](https://www.npmjs.com/package/humanize-ordinal):

```sh
npm install humanize-ordinal --save
```

Use `default` export:

```js
import humanizeOrdinal from "humanize-ordinal"

humanizeOrdinal(1)  // => "1st"
humanizeOrdinal(12) // => "12th"
humanizeOrdinal(23) // => "23rd"
```

Currently, only English is supported.
