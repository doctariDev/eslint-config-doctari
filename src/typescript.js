import {fixupPluginRules} from '@eslint/compat';
import stylisticPlugin from '@stylistic/eslint-plugin';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import redundantUndefinedPlugin from 'eslint-plugin-redundant-undefined';

const typescriptConfig = [
    {
        plugins: {
            '@typescript-eslint': tseslint,
            '@stylistic': stylisticPlugin,
            'redundant-undefined': fixupPluginRules(redundantUndefinedPlugin),
        },
        languageOptions: {
            parser: tsParser,
        },
        rules: {
            ...tseslint.configs.recommended.rules,
            'semi': 'off',
            'no-extra-semi': 'off',
            'no-unused-vars': 'off',
            'no-undef': 'off',
            'no-redeclare': 'off',
            'redundant-undefined/redundant-undefined': 'error',
            '@stylistic/semi': 'error',
            '@stylistic/no-extra-semi': 'error',
            '@typescript-eslint/await-thenable': 'error',
            '@typescript-eslint/no-require-imports': 'off',
            '@typescript-eslint/no-unused-expressions': 'off',
            '@stylistic/type-annotation-spacing': 'error',
            '@stylistic/space-infix-ops': 'error',
            '@stylistic/member-delimiter-style': 'error',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/explicit-member-accessibility': 'off',
            '@typescript-eslint/array-type': [
                'error',
                {
                    'default': 'generic',
                },
            ],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-var-requires': 'off',
            '@typescript-eslint/no-unused-vars': ['error', {
                'ignoreRestSiblings': true,
            }],
            '@typescript-eslint/no-duplicate-enum-values': 'error',
            '@typescript-eslint/no-unnecessary-type-assertion': 'error',
            '@typescript-eslint/prefer-optional-chain': 'error',
            '@typescript-eslint/naming-convention': [
                'error',
                {
                    'selector': 'default',
                    'format': [
                        'camelCase',
                    ],
                },
                {
                    'selector': 'import',
                    'format': [
                        'camelCase',
                        'PascalCase',
                        'UPPER_CASE',
                    ],
                },
                {
                    'selector': 'variable',
                    'format': [
                        'camelCase',
                        'PascalCase',
                        'UPPER_CASE',
                    ],
                },
                {
                    'selector': [
                        'function',
                        'classMethod',
                    ],
                    'format': [
                        'camelCase',
                    ],
                },
                {
                    'selector': 'objectLiteralProperty',
                    'format': null,
                },
                {
                    'selector': [
                        'typeLike',
                        'enumMember',
                    ],
                    'format': [
                        'PascalCase',
                    ],
                },
                {
                    'selector': 'typeProperty',
                    'format': [
                        'camelCase',
                        'PascalCase',
                    ],
                },
            ],
            '@typescript-eslint/no-restricted-types': [
                'error',
                {
                    'types': {
                        'JSX.Element': {
                            'message': 'JSX.Element is deprecated. Use ReactElement',
                        },
                        'FC': {
                            'message': 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
                        },
                        'FunctionComponent': {
                            'message': 'Useless and has some drawbacks, see https://github.com/facebook/create-react-app/pull/8177',
                        },
                    },
                },
            ],
        },
    },
    {
        files: ['**/*.ts', '**/*.tsx'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'error',
            '@typescript-eslint/explicit-member-accessibility': 'error',
        },
    },
];

export default typescriptConfig;
