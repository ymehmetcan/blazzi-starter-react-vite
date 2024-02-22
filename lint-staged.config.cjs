module.exports = {
  '*': 'prettier --write --cache --ignore-unknown',
  '*.{js,cjs,mjs,jsx,tsx}': 'eslint --max-warnings 0',
};
