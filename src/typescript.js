module.exports = {
    'extends': [
        '@doctarigroup/eslint-config',
    ],
    'overrides': [
        {
            'files': ['*.ts', '*.tsx'],
            'parser': '@typescript-eslint/parser',
            'plugins': [
                '@typescript-eslint',
            ],
            'extends': [
                '@doctarigroup/eslint-config',
                'plugin:@typescript-eslint/recommended',
            ],
            'rules': {
                'semi': ['off'],
                'no-extra-semi': ['off'],
            },
        },
    ],
};
