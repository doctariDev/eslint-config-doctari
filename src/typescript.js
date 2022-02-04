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
        '@typescript-eslint/array-type': [
            'error',
            {
                'default': 'generic',
                'read-only': 'generic',
            },
        ],
        '@typescript-eslint/no-var-requires': 'off',
    },
};
