module.exports = {
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
    },
    'extends': [
        'google',
        'plugin:cypress/recommended',
        'plugin:jest-formatting/strict',
        'plugin:jest/style',
    ],
    'plugins': [
        'unicorn',
        'filenames',
        'import',
        'import-newlines',
        'simple-import-sort',
        'jest',
        'jest-formatting',
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
        'filenames/match-exported': ['error', ['camel', 'pascal']],
        'indent': [
            'error', 4, {
                'SwitchCase': 1,
            },
        ],
        'quotes': ['error', 'single'],
        'no-undef': 'error',
        'max-len': ['error', {'code': 120, 'ignorePattern': '^import .*'}],
        'max-depth': ['warn', {'max': 2}],
        'space-infix-ops': [
            'error', {
                'int32Hint': false,
            },
        ],
        'padded-blocks': ['error', 'never'],
        'arrow-body-style': ['error', 'as-needed'],
        'arrow-spacing': 'error',
        'object-curly-spacing': ['error', 'never'],
        'object-property-newline': [
            'error', {
                'allowAllPropertiesOnSameLine': true,
            },
        ],
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
        'space-in-parens': 'error',
        'no-extra-parens': ['error', 'all', {'ignoreJSX': 'all'}],
        'prefer-arrow-callback': 'error',
        'array-callback-return': [
            'error', {
                'checkForEach': true,
            },
        ],
        'no-multiple-empty-lines': [
            'error', {
                'max': 1,
                'maxBOF': 0,
                'maxEOF': 0,
            },
        ],
        'lines-between-class-members': ['error', 'always'],
        'newline-before-return': 'error',
        'padding-line-between-statements': [
            'error',
            {'blankLine': 'always', 'prev': '*', 'next': 'function'},
            {'blankLine': 'always', 'prev': '*', 'next': 'return'},
        ],
        'operator-linebreak': ['error', 'before'],
        'nonblock-statement-body-position': ['error', 'below'],
        'function-paren-newline': ['error', 'multiline-arguments'],
        'eqeqeq': 'error',
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
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-invalid-this': 'error',
        'no-unused-vars': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'dot-notation': 'error',
        'unicorn/better-regex': 'error',
        'unicorn/empty-brace-spaces': 'error',
        'unicorn/explicit-length-check': 'error',
        'unicorn/catch-error-name': 'error',
        'unicorn/prefer-node-protocol': 'error',
        'unicorn/prefer-object-from-entries': 'error',
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-empty-file': 'error',
        'unicorn/no-console-spaces': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-typeof-undefined': 'error',
        'unicorn/no-unnecessary-await': 'error',
        'unicorn/no-useless-undefined': 'error',
        'unicorn/throw-new-error': 'error',
        'simple-import-sort/imports': [
            'error', {
                'groups': [
                    ['^.+\\.s?css$'],
                    ['^\\u0000'],
                    ['^node:'],
                    ['^\\w'],
                    ['^@[doctari|backend]'],
                    ['^'],
                    ['^\\.'],
                ],
            },
        ],
        'no-restricted-syntax': [
            'error',
            {
                'selector': 'MemberExpression[object.name=\'React\'][property.name=/.*/]',
                'message': 'Do not access hooks using "React.*" Import them directly.',
            },
            {
                'selector': 'TSTypeReference > TSQualifiedName[left.name=\'React\']',
                'message': 'Do not use React types like \'React.*\'. Import them directly.',
            },
            {
                'selector': 'TSTypeReference > TSQualifiedName[left.left.name=\'React\']',
                'message': 'Do not use React types like \'React.*\'. Import them directly.',
            },
            {
                "selector": "ReturnStatement[argument.type='Identifier'][argument.name='undefined']",
                "message": "Use `return;` instead of `return undefined;`"
            }
        ],
        'import/first': 'error',
        'import/no-duplicates': 'error',
        'import/no-useless-path-segments': 'error',
        'import/newline-after-import': 'error',
        'import-newlines/enforce': [
            'error', {
                'items': 50,
                'max-len': 120,
            },
        ],
        'jest/consistent-test-it': ['error', {'fn': 'it'}],
        'jest/no-conditional-expect': 'error',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-identical-title': 'error',
        'jest/no-standalone-expect': 'error',
        'jest/valid-expect': 'error',
        'jest/valid-title': 'error',
        'jest/no-restricted-matchers': [
            'error',
            {
                'toBeTruthy': 'Avoid "toBeTruthy" use "toBe(true)" instead',
                'toBeFalsy': 'Avoid "toBeFalsy" use "toBe(false)" instead',
            },
        ],
    },
};
