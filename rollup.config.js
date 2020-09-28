import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';
import nodeGlobals from 'rollup-plugin-node-globals';

const plugins = [
    peerDepsExternal(),
    vue(),
    css({ output: 'dist/bundle.css' }),
    resolve({
        extensions: ['.js', '.json', '.vue']
    }),
    commonjs(),
    renameExtensions({
        include: ['**/*.vue'],
        mappings: { '.vue': '.vue.js' }
    }),
    json()
];

export default [
    {
        input: 'src/index.js',
        output: [
            {
                format: 'es',
                dir: 'dist'
                // preserveModules: true,
                // preserveModulesRoot: 'src'
            },
            {
                format: 'cjs',
                file: 'dist/index.cjs.js'
            }
        ],
        plugins: [
            ...plugins,
            babel({
                babelHelpers: 'runtime',
                exclude: 'node_modules/**',
                plugins: ['@babel/plugin-transform-runtime']
            })
        ],
        external: [/@babel\/runtime/]
    }, {
        input: 'src/index.umd.js',
        output: [
            {
                exports: 'named',
                format: 'umd',
                file: 'dist/index.min.js',
                name: 'VueAtlaskit',
                globals: {
                    vue: 'Vue'
                }
            }
        ],
        plugins: [
            ...plugins,
            babel({
                babelHelpers: 'bundled',
                exclude: 'node_modules/**',
                presets: [
                    [
                        '@babel/preset-env',
                        {
                            useBuiltIns: 'usage',
                            corejs: 3
                        }
                    ]
                ]
            }),
            nodeGlobals(),
            terser()
        ]
    }
];
