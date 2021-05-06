import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import json from '@rollup/plugin-json';
import { uglify } from 'rollup-plugin-uglify';

export default {
    input: 'src/index.js',
    output: [{
        file: './dist/index.min.js',
        format: 'umd',
        name: 'flexibleAxios'
    }],
    plugins: [
        commonjs(),
        nodePolyfills(),
        nodeResolve(),
        json(),
        uglify()
    ]
};
