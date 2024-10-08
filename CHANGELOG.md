

## [1.0.1](https://github.com/luoxiangfan/nuxt-purgecss/compare/1.0.0...1.0.1) (2024-09-19)

## 1.0.0 (2024-09-19)


### ⚠ BREAKING CHANGES

* nuxt3 support (#125)

### Features

* accept module options ([c15f876](https://github.com/luoxiangfan/nuxt-purgecss/commit/c15f876044b7c1c2d60d9dea6a1c47f6f9597516)), closes [#21](https://github.com/luoxiangfan/nuxt-purgecss/issues/21)
* add nuxt build indicator to whitelist in dev mode ([#85](https://github.com/luoxiangfan/nuxt-purgecss/issues/85)) ([c123fef](https://github.com/luoxiangfan/nuxt-purgecss/commit/c123fefb784c1e16b713f9558a9b13007a9c08f5))
* add nuxt.config.js to paths to purge classes used there ([3dba75e](https://github.com/luoxiangfan/nuxt-purgecss/commit/3dba75e77a4f268f8a2136aed2ce95ee086b962e))
* info log when module is disabled by default (in dev mode) ([6996641](https://github.com/luoxiangfan/nuxt-purgecss/commit/699664189639977d4592cb601d515aea9b2e1268)), closes [#23](https://github.com/luoxiangfan/nuxt-purgecss/issues/23)
* nuxt3 support ([#125](https://github.com/luoxiangfan/nuxt-purgecss/issues/125)) ([24b890e](https://github.com/luoxiangfan/nuxt-purgecss/commit/24b890e022eca04c1af29029b63356d0f9d9d2e2))
* use official regex and support tailwind ui ([#79](https://github.com/luoxiangfan/nuxt-purgecss/issues/79)) ([ba13564](https://github.com/luoxiangfan/nuxt-purgecss/commit/ba1356439a1f0411d24f5123522b93856407b727))


### Bug Fixes

* add `__nuxt` & `__layout` to whitelist ([#36](https://github.com/luoxiangfan/nuxt-purgecss/issues/36)) ([d1fbe53](https://github.com/luoxiangfan/nuxt-purgecss/commit/d1fbe5369310f8611f11131a46b3c3df91b22925))
* add empty whitelistPatterns and whitelistPatternsChildren ([#30](https://github.com/luoxiangfan/nuxt-purgecss/issues/30)) ([f17667d](https://github.com/luoxiangfan/nuxt-purgecss/commit/f17667d95ed14a9309deff88a4795f304b8c354d))
* allow absolute paths ([#96](https://github.com/luoxiangfan/nuxt-purgecss/issues/96)) ([3a5075e](https://github.com/luoxiangfan/nuxt-purgecss/commit/3a5075ea7987644328e34da0babc6ad80fbe0751))
* do not purge vue transition css classes ([#59](https://github.com/luoxiangfan/nuxt-purgecss/issues/59)) ([5dd0972](https://github.com/luoxiangfan/nuxt-purgecss/commit/5dd097259e213504a958d58ef73f43e87c32e68d))
* purgecss not breaking nuxt-devtools ([#194](https://github.com/luoxiangfan/nuxt-purgecss/issues/194)) ([3b9efda](https://github.com/luoxiangfan/nuxt-purgecss/commit/3b9efdac9f536b6c42c60ac22789f1c19748c82f))
* return empty array if extractor doesn't match ([c847c34](https://github.com/luoxiangfan/nuxt-purgecss/commit/c847c34da178debe00558bdba811bf652f7fa9e3))
* **scoped-css:** whitelist data-v-* attributes ([#75](https://github.com/luoxiangfan/nuxt-purgecss/issues/75)) ([f9942de](https://github.com/luoxiangfan/nuxt-purgecss/commit/f9942deab848eb23c588616e51c7560e341a2731))
* superfluous error message in dev mode ([#4](https://github.com/luoxiangfan/nuxt-purgecss/issues/4)) ([cb38a65](https://github.com/luoxiangfan/nuxt-purgecss/commit/cb38a653bea8008a4eb11315d2c8cf54890cb455))

## [2.0.0](https://github.com/Developmint/nuxt-purgecss/compare/v1.0.0...v2.0.0) (2022-09-30)


### ⚠ BREAKING CHANGES

* nuxt3 support (#125)

### Features

* add nuxt build indicator to whitelist in dev mode ([#85](https://github.com/Developmint/nuxt-purgecss/issues/85)) ([c123fef](https://github.com/Developmint/nuxt-purgecss/commit/c123fefb784c1e16b713f9558a9b13007a9c08f5))
* nuxt3 support ([#125](https://github.com/Developmint/nuxt-purgecss/issues/125)) ([24b890e](https://github.com/Developmint/nuxt-purgecss/commit/24b890e022eca04c1af29029b63356d0f9d9d2e2))


### Bug Fixes

* allow absolute paths ([#96](https://github.com/Developmint/nuxt-purgecss/issues/96)) ([3a5075e](https://github.com/Developmint/nuxt-purgecss/commit/3a5075ea7987644328e34da0babc6ad80fbe0751))


## [1.0.0](https://github.com/Developmint/nuxt-purgecss/compare/v0.2.1...v1.0.0) (2020-04-26)


### ⚠ BREAKING CHANGES

* `postcss` mode is the default mode (previously `webpack`)
* Updated to PurgeCSS 2 and the new extractor syntax (fn instead of class)
* Unused styles inside SFCs are purged properly 
* Enabling the module now depends on the mode by default
	* When in `nuxt dev`, it is disabled
	* Purging is enabled otherwise

## Features

* add nuxt.config.js to paths to purge classes used there ([3dba75e](https://github.com/Developmint/nuxt-purgecss/commit/3dba75e77a4f268f8a2136aed2ce95ee086b962e))
* use official regex and support tailwind ui ([#79](https://github.com/Developmint/nuxt-purgecss/issues/79)) ([ba13564](https://github.com/Developmint/nuxt-purgecss/commit/ba1356439a1f0411d24f5123522b93856407b727))


### Bug Fixes

* **scoped-css:** whitelist data-v-* attributes ([#75](https://github.com/Developmint/nuxt-purgecss/issues/75)) ([f9942de](https://github.com/Developmint/nuxt-purgecss/commit/f9942deab848eb23c588616e51c7560e341a2731))
* add `__nuxt` & `__layout` to whitelist ([#36](https://github.com/Developmint/nuxt-purgecss/issues/36)) ([d1fbe53](https://github.com/Developmint/nuxt-purgecss/commit/d1fbe5369310f8611f11131a46b3c3df91b22925))
* do not purge vue transition css classes ([#59](https://github.com/Developmint/nuxt-purgecss/issues/59)) ([5dd0972](https://github.com/Developmint/nuxt-purgecss/commit/5dd097259e213504a958d58ef73f43e87c32e68d))


## Internal improvements

* Improved README (fixes https://github.com/Developmint/nuxt-purgecss/issues/62)
* Revamped tests and utilized https://github.com/nuxt-community/module-test-utils/
* GitHub actions are used as CI now



<a name="0.2.1"></a>
## [0.2.1](https://github.com/Developmint/nuxt-purgecss/compare/v0.2.0...v0.2.1) (2019-01-21)


### Bug Fixes

* add empty whitelistPatterns and whitelistPatternsChildren ([#30](https://github.com/Developmint/nuxt-purgecss/issues/30)) ([f17667d](https://github.com/Developmint/nuxt-purgecss/commit/f17667d))



<a name="0.2.0"></a>
# [0.2.0](https://github.com/Developmint/nuxt-purgecss/compare/v0.1.0...v0.2.0) (2018-12-19)


### Features

* info log when module is disabled by default (in dev mode) ([6996641](https://github.com/Developmint/nuxt-purgecss/commit/6996641)), closes [#23](https://github.com/Developmint/nuxt-purgecss/issues/23)



<a name="0.1.0"></a>
# [0.1.0](https://github.com/Developmint/nuxt-purgecss/compare/v0.0.2...v0.1.0) (2018-12-19)


### Bug Fixes

* return empty array if extractor doesn't match ([c847c34](https://github.com/Developmint/nuxt-purgecss/commit/c847c34))


### Features

* accept module options ([c15f876](https://github.com/Developmint/nuxt-purgecss/commit/c15f876)), closes [#21](https://github.com/Developmint/nuxt-purgecss/issues/21)



<a name="0.0.2"></a>
## [0.0.2](https://github.com/Developmint/nuxt-purgecss/compare/v0.0.1...v0.0.2) (2018-10-24)


### Bug Fixes

* superfluous error message in dev mode ([#4](https://github.com/Developmint/nuxt-purgecss/issues/4)) ([cb38a65](https://github.com/Developmint/nuxt-purgecss/commit/cb38a65))



<a name="0.0.1"></a>
## 0.0.1 (2018-10-21)
