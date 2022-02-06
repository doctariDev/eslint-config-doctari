module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],
    'extends': [
        'plugin:@typescript-eslint/recommended',
    ],
    'rules': {
        'semi': 'off',
        'no-extra-semi': 'off',
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/array-type': [
            'error',
            {
                'default': 'generic',
                'read-only': 'generic',
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                'selector': 'default',
                'format': [
                    'camelCase',
                ],
            },
            {
                'selector': 'variable',
                'format': [
                    'camelCase',
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
                'leadingUnderscore': 'allow',
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
        ],
    },
    'overrides': [
        {
            'files': [
                '*.ts',
                '*.tsx',
            ],
            'rules': {
                '@typescript-eslint/explicit-function-return-type': 'error',
                '@typescript-eslint/explicit-member-accessibility': 'error',
            },
        },
    ],
};
