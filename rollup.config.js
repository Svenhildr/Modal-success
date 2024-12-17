const babel = require("@rollup/plugin-babel");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const postcss = require("rollup-plugin-postcss");
const serve = require("rollup-plugin-serve");
const replace = require("@rollup/plugin-replace");
const dev = process.env.ROLLUP_WATCH;

module.exports = {
    input: "src/lib/index.js",
    output: [
        {
            file: "dist/index.js",
            format: "umd",
            name: "success-modal-hrnet",
            globals: {
                react: "React",
                "react-dom": "ReactDOM"
            },
            sourcemap: true
        }
    ],
    plugins: [
        resolve(),
        commonjs(),
        babel({
            exclude: "node_modules/**",
            babelHelpers: "bundled",
            presets: ["@babel/preset-react"]
        }),
        postcss({
            extract: true,
            modules: false,
            use: ["sass"]
        }),
        replace({
            "process.env.NODE_ENV": JSON.stringify(dev ? "development" : "production"),
            preventAssignment: true
        }),
        dev &&
            serve({
                open: true,
                contentBase: ["dist"],
                host: "localhost",
                port: 3000
            })
    ],
    external: ["react", "react-dom"]
};
