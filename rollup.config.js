import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

let config = {
    input: 'src/index.js',
    output: [{
        file: './dist/index.min.js',
        format: 'iife',
        name: 'flexibleAxios'
    }],
    plugins: [
        commonjs(),
        nodePolyfills(),
        nodeResolve({ mainFields: ["jsnext", "preferBuiltins", "browser"] }),
        json(),
        babel({
            "exclude": 'node_modules/**',
            "babelHelpers": 'bundled',
            "presets": ['@babel/preset-env'],
        })
    ]
}
if (process.env.NODE_ENV === 'production') {
    config.plugins.push(uglify())
}
export default config;
