module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "rules": {
      "arrow-body-style": [0],
      "arrow-parens": [0],
      "class-methods-use-this": [0],
      "id-length": [2, {"min": 1}],
      "import/no-deprecated": [1],
      "import/no-extraneous-dependencies": [2, {
        devDependencies: true,
        optionalDependencies: false,
      }],
      "import/no-unresolved": [0],
      "import/no-named-as-default": [0],
      "import/order": [2, {
        "groups": [
          ["builtin", "external"],
          "internal",
          "parent",
          "sibling",
          "index",
        ],
        "newlines-between": "always",
      }],
      "max-len": [2, 100, 2],
      "newline-per-chained-call": [0],
      "no-mixed-operators": [2, {
        "groups": [
          ["&", "|", "^", "~", "<<", ">>", ">>>"],
          ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
          ["&&", "||"],
          ["in", "instanceof"]
        ],
      }],
      "no-continue": [0],
      "no-plusplus": [0],
      "import/prefer-default-export": [0],
      "prefer-template": [0],
      "jsx-quotes": [1, "prefer-single"],
      "jsx-a11y/no-static-element-interactions": [0],
      "react/forbid-prop-types": [0],
      "react/jsx-boolean-value": [1, "always"],
      "react/jsx-filename-extension": [0],
      "react/jsx-indent": [0],
      "react/no-string-refs": [0],
      "react/no-unused-prop-types": [0],
      "react/prefer-stateless-function": [0],
      "react/sort-prop-types": [2, {
        "callbacksLast": true,
        "ignoreCase": false,
        "requiredFirst": true,
      }]
    }
};
