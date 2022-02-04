module.exports = {
    'parser': '@typescript-eslint/parser',
    'plugins': [
        '@typescript-eslint',
    ],
    'extends': [
        'plugin:@typescript-eslint/recommended',
    ],
    'rules': {
        'semi': ['off'],
        'no-extra-semi': ['off'],
        '@typescript-eslint/array-type': [
            'error',
            {
                'default': 'generic',
                'read-only': 'generic',
            },
        ],
    },
};
