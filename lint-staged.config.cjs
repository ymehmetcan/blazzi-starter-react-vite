module.exports = {
  '*': 'prettier --write --cache --ignore-unknown',
  '*.{js,cjs,mjs,jsx,ts,tsx}': 'eslint --max-warnings 0',
};
