module.exports = {
    "extends": "airbnb",
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-return-assign": 0,
        // "jsx-a11y/click-events-have-key-events": false,
        // 'jsx-a11y/interactive-supports-focus': false,
        // 'react/forbid-prop-types': ['error', { forbid: ['any', 'array'] }],
        // "react/jsx-no-bind": ['error', {"allowBind": true, "allowArrowFunctions": true}],
        // "jsx-a11y/anchor-is-valid": ['error', {"components": true }],
        // 'jsx-a11y/no-noninteractive-element-interactions': false,
        "jsx-a11y/anchor-is-valid": 0,
    },
    "env": {
        "browser": true,
    }
};
