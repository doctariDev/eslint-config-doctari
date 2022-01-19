module.exports = {
    'extends': [
        './default',
    ],
    'overrides': [
        {
            'files': ['*.ts', '*.tsx'],
            'parser': '@typescript-eslint/parser',
            'plugins': [
                '@typescript-eslint',
            ],
            'extends': [
                './default',
                'plugin:@typescript-eslint/recommended',
            ],
            'rules': {
                'semi': ['off'],
                'no-extra-semi': ['off'],
            },
        },
    ],
};
