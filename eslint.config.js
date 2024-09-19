export default [
  {
    ignores: ["dist/*", "node_modules/*", ".nuxt/*", "coverage/*", 'coverage'],
    files: ["*.js", "*.ts", "*.vue"],
    rules: {
      'no-console': 'off'
    }
  }
]
