module.exports = {
    'settings': {
        'react': {
            'createClass': 'createReactClass',
            'pragma': 'React',
            'version': 'detect',
        },
    },
    'parserOptions': {
        'ecmaVersion': 6,
        'sourceType': 'module',
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    'extends': [
        'plugin:react/recommended',
    ],
    'rules': {
        'jsx-quotes': ['error', 'prefer-double'],
        'react/display-name': 0,
        'react/no-unescaped-entities': [
            'error', {
                'forbid': ['>', '}'],
            },
        ],
        'react/forbid-elements': [
            'error', {
                'forbid': [
                    {
                        'element': 'React.Fragment',
                        'message': 'Use "Fragment" instead of "React.Fragment"',
                    },
                ],
            },
        ],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-max-props-per-line': ['error', {'maximum': 1, 'when': 'multiline'}],
        'react/jsx-first-prop-new-line': ['error', 'multiline'],
        'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
        'react/jsx-wrap-multilines': [
            'error', {
                'declaration': 'parens-new-line',
                'assignment': 'parens-new-line',
                'return': 'parens-new-line',
                'arrow': 'parens-new-line',
                'condition': 'parens-new-line',
                'logical': 'parens-new-line',
                'prop': 'parens-new-line',
            },
        ],
        'react/jsx-tag-spacing': [
            'error', {
                'closingSlash': 'never',
                'beforeSelfClosing': 'never',
                'afterOpening': 'never',
                'beforeClosing': 'never',
            },
        ],
        'react/jsx-fragments': ['error', 'element'],
        'react/jsx-curly-brace-presence': ['error', {'props': 'never', 'children': 'never'}],
        'react/jsx-curly-spacing': ['error', {'when': 'never', 'children': true}],
        'react/jsx-boolean-value': ['error', 'never'],
        "react/jsx-no-literals": ["error", {"noStrings": true, "ignoreProps": true}],
    },
    'overrides': [
        {
            'files': [
                '*.tsx',
            ],
            'rules': {
                'react/jsx-filename-extension': [
                    'error', {
                        'allow': 'as-needed',
                        'extensions': ['.tsx'],
                    },
                ],
            },
        },
    ],
};
