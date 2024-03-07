module.exports = {
    trailingComma: 'all',
    arrowParens: 'always',
    singleQuote: true,
    printWidth: 100,
    plugins: ['@ianvs/prettier-plugin-sort-imports'],
    importOrder: [
      '^types$',
      '^(react|react-dom)$',
      '^next(.*)$',
      '<THIRD_PARTY_MODULES>',
      '',
      '^(src|vectors|images|services|hooks|queries|store|styles|config|navigators|screens|static)(/.*|$)',
      '^(pages|layouts|moleclues|atoms|organisms|templates|components)(/.*|$)',
      '',
      '^[./]',
    ],
    importOrderParserPlugins: ['typescript', 'jsx'],
    importOrderTypeScriptVersion: '5.1.0',
  };
  