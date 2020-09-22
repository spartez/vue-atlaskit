import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';

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
        css: false
    }),
    babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**'
    }),
    json()
];

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'es',
                dir: 'dist',
                preserveModules: true,
                preserveModulesRoot: 'src'
            },
            {
                format: 'cjs',
                file: 'dist/index.cjs.js'
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
                name: 'atlaskit',
                globals: {
                    vue: 'Vue'
                }
            }
        ],
        plugins: [
            ...plugins,
            terser()
        ]
    }
];
