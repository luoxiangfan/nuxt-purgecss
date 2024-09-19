# Nuxt PurgeCSS - Drop superfluous CSS!

## Features

* Remove unneeded CSS with ease
* Sane default settings
* Built on top of [purgecss](https://github.com/FullHuman/purgecss)
* Nuxt 3 support

## Setup

1. Add `nuxt3-purgecss` dependency to your project

```bash
yarn add --dev nuxt3-purgecss # or npm install --save-dev nuxt3-purgecss
```

2. Add `nuxt3-purgecss` to the `modules` section of `nuxt.config.{js,ts}`

```js
export default {
  modules: [
    // Simple usage
    'nuxt3-purgecss',

    // With options
    ['nuxt3-purgecss', { /* module options */ }],
  ]
}
```

## Options

### Defaults

Before diving into the individual attributes, please have a look [at the default settings](https://github.com/luoxiangfan/nuxt-purgecss/blob/main/src/config.ts) of the module.

The defaults will scan all your `.vue`, `.js` and `.ts` files in the common Nuxt folders, as well as checking your `nuxt.config.js` (or `.ts`) for used classes.
Furthermore, typical classes (like these needed for transitions, the nuxt link ones or those set when using scoped styles) are whitelisted already.

These settings should be a good foundation for a variety of projects.

### Properties in-depth

#### enabled

* Type: `Boolean`
* Default: `!nuxt.options.dev` (Disabled during `nuxt dev`, enabled otherwise)

Enables the module when set to `true`.

#### PurgeCSS options

Please read [the PurgeCSS docs](https://www.purgecss.com/configuration) for information about
PurgeCSS-related information.

## Examples

### Default setup

```js
// nuxt.config.js
export default {
  modules: [
    'nuxt3-purgecss',
  ]
}
```

### Customize options

```js
//nuxt.config.js
export default {
  modules: [
    'nuxt3-purgecss',
  ],

  purgecss: {
    enabled: true, // Always enable purgecss
    safelist: ['my-class'], // Add my-class token to the safelist (e.g. .my-class)
  }
}
```

## Caveats

* Don't forget to add paths to pages and components that are not part the common folders (e.g. third party packages)
* The default generated 500 and 404 pages will be purged by default. Please ensure you have an appropriate error layout
* Do not use the old `>>>` or `::v-deep` syntax. Instead, go for `:deep`

## License

[MIT License](./LICENSE)

Copyright (c) Alexander Lichter
