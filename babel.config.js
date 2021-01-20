module.exports = {
  /**
   * Highlight tokens in code snippets in Babel's error messages to make them easier to read.
   * @see https://babeljs.io/docs/en/options#highlightcode
   * @see https://babeljs.io/docs/en/babel-parser#options
   * @type {boolean}
   */
  highlightCode: true,
  /**
   * An opaque object containing options to pass through to the parser being used.
   * @see https://babeljs.io/docs/en/options#parseropts
   * @type {Object<string, any>}
   */
  parserOpts: {},
  /**
   * Includes compact: true, omits block-end semicolons, omits () from new Foo() when possible, and may output shorter versions of literals.
   * @see https://babeljs.io/docs/en/options#minified
   * @type {boolean}
   */
  minified: true,
  /**
   * Decide whether comments should be included in the output code from Babel.
   * @see https://babeljs.io/docs/en/options#comments
   * @type {boolean}
   */
  comments: false,
  /**
   * An array of presets to activate when processing the JS files.
   * @type {(String | (string | Object<string, any>)[])[]}
   */
  presets: [
    // @babel/preset-env is a smart preset that allows you to use the latest
    // JavaScript without needing to micromanage which syntax transforms (and
    // optionally, browser polyfills) are needed by your target environment(s).
    [
      "@babel/env",
      {
        /**
         * Describes the environments you support/target for your project. This can either be a browserslist-compatible query or an object of minimum environment versions to support.
         * @see https://babeljs.io/docs/en/babel-preset-env#targets
         * @type {string | Array<string> | { [key: string]: string }}
         */
        targets: {
          edge: "17",
          firefox: "60",
          chrome: "67",
          safari: "11.1",
        },

        /**
         * Try to compile the broken syntax to the closest non-broken modern syntax supported by your target browsers.
         * @see https://babeljs.io/docs/en/babel-preset-env#bugfixes
         * @type {boolean}
         */
        bugfixes: true,

        /**
         * Outputs to console.log the polyfills and transform plugins enabled by preset-env and, if applicable, which one of your targets that needed it.
         * @see https://babeljs.io/docs/en/babel-preset-env#debug
         * @type {boolean}
         */
        debug: false,
      },
    ],
    // Babel preset for all React plugins.
    [
      "@babel/preset-react",
      {
        /**
         * Automatic auto imports the functions that JSX transpiles to. Classic does not automatic import anything.
         * @see https://babeljs.io/docs/en/babel-preset-react#runtime
         * @type {"classic" | "automatic"}
         */
        runtime: "classic",
      },
    ],
  ],
};
