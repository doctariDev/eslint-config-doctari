module.exports = {
    'parser': '@babel/eslint-parser',
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'extends': [
        'google',
        'plugin:cypress/recommended',
    ],
    'plugins': [
        '@babel',
        'import',
        'jest',
        'json-format',
    ],
    'env': {
        'node': true,
        'es6': true,
    },
    'globals': {
        'fail': 'readonly',
    },
    'rules': {
        'indent': [
            'error', 4, {
                'SwitchCase': 1,
            },
        ],
        'no-undef': 'error',
        'max-len': ['error', 120, 4],
        'space-infix-ops': [
            'error', {
                'int32Hint': false,
            },
        ],
        'padded-blocks': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': ['error'],
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'comma-dangle': [
            'error', {
                'arrays': 'always-multiline',
                'objects': 'always-multiline',
                'imports': 'always-multiline',
                'exports': 'always-multiline',
                'functions': 'always-multiline',
            },
        ],
        'space-in-parens': ['error'],
        'prefer-arrow-callback': ['error'],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 0,
            },
        ],
        'lines-between-class-members': ['error', 'always'],
        'newline-before-return': 'error',
        'operator-linebreak': ['error', 'before'],
        'nonblock-statement-body-position': ['error', 'below'],
        'eqeqeq': ['error'],
        'require-jsdoc': [
            'error', {
                'require': {
                    'FunctionDeclaration': false,
                    'MethodDefinition': false,
                    'ClassDeclaration': false,
                    'ArrowFunctionExpression': false,
                    'FunctionExpression': false,
                },
            },
        ],
        'valid-jsdoc': [
            'error', {
                'prefer': {
                    'return': 'returns',
                },
                'requireReturn': false,
                'requireReturnDescription': false,
                'requireParamDescription': false,
            },
        ],
        'no-extra-semi': 'error',
        'no-invalid-this': 0,
        'no-unused-vars': 'error',
        '@babel/no-invalid-this': 1,
        'import/order': ['error', {'newlines-between': 'always'}],
    },
};
