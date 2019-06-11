import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';

const plugins = [
    peerDepsExternal(),
    css({ output: 'dist/bundle.css' }),
    resolve({
        extensions: ['.js', '.json', '.vue']
    }),
    commonjs(),
    vue({
        css: false,
        compileTemplate: true // Explicitly convert template to render function
    }),
    babel({
        exclude: 'node_modules/**'
    }),
    terser()
];

export default [
    {
        input: 'src/index.js',
        output: [
            {
                exports: 'named',
                format: 'es',
                file: 'dist/index.esm.js',
                name: 'atlaskit'
            },
            {
                exports: 'named',
                format: 'cjs',
                file: 'dist/index.cjs.js',
                name: 'atlaskit'
            }
        ],
        plugins
    }, {
        input: 'src/index.umd.js',
        output: [
            {
                exports: 'named',
                format: 'iife',
                file: 'dist/index.min.js',
                name: 'atlaskit'
            }
        ],
        plugins
    }
];
