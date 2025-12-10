import js from '@eslint/js';
import astro from 'eslint-plugin-astro';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const tsConfigs = tseslint.configs.recommended.map((config) => ({
    ...config,
    languageOptions: {
        ...config.languageOptions,
        parserOptions: {
            ...config.languageOptions?.parserOptions,
            project: './tsconfig.json',
            tsconfigRootDir: import.meta.dirname,
        },
    },
}));

const astroConfigs = astro.configs['flat/recommended'].map((config) => ({
    ...config,
    languageOptions: {
        ...config.languageOptions,
        parserOptions: {
            ...config.languageOptions?.parserOptions,
            project: './tsconfig.json',
            tsconfigRootDir: import.meta.dirname,
            extraFileExtensions: ['.astro'],
        },
    },
}));

export default [
    {
        ignores: ['dist', '.astro', 'node_modules'],
    },
    js.configs.recommended,
    ...tsConfigs,
    ...astroConfigs,
    {
        files: ['**/*.config.{js,mjs,cjs}'],
        languageOptions: {
            globals: globals.node,
        },
    },
];
