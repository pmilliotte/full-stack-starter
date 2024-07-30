module.exports = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  importOrder: ["^@starter(.*)/(.*)$", "^~/(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  plugins: ['@trivago/prettier-plugin-sort-imports'],
  importOrderParserPlugins: ['importAssertions', 'typescript', 'jsx'],
};
