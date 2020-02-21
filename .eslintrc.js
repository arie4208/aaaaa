module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  extends: [
    "eslint:recommended",
    "plugin:vue/recommended",
    "prettier",
    "prettier/vue"
  ],
  parser: "vue-eslint-parser",
  plugins: ["vue"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)"
      ],
      env: {
        jest: true
      }
    }
  ]
};
