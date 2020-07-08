import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import json from '@rollup/plugin-json';

const plugins = [
    peerDepsExternal(),
    css({ output: 'dist/bundle.css' }),
    resolve({
        extensions: ['.js', '.json', '.vue']
    }),
    commonjs(),
    renameExtensions({
        include: ['**/*.vue'],
        mappings: { '.vue': '.vue.js' }
    }),
    vue({
        css: false,
        compileTemplate: true // Explicitly convert template to render function
    }),
    babel({
        exclude: 'node_modules/**'
    }),
    terser(),
    json()
];

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'es',
                dir: 'dist/lib/'
            }
        ],
        plugins,
        preserveModules: true
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
