module.exports = {
    extends: [
        '@blazzi/eslint-config/typescript',
        '@blazzi/eslint-config/react',
    ],
    parserOptions:{
        project: './tsconfig.eslint.json',
    },
    ignorePatterns: ['dist'],
};