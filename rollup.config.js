import fs from 'fs';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import vue from 'rollup-plugin-vue';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import css from 'rollup-plugin-css-only';
import renameExtensions from '@betit/rollup-plugin-rename-extensions';

const ROOT_DIR = 'src/components/';

const components = fs
    .readdirSync(ROOT_DIR)
    .filter((f) =>
        fs.statSync(path.join(ROOT_DIR, f)).isDirectory()
    );
const entries = {
    index: 'src/index.js',
    ...components.reduce((entry, name) => {
        return { [name]: ROOT_DIR + name + '/index.js', ...entry }
    }, [])
};

const plugins = [
    vue(),
    css({ output: 'dist/bundle.css' }),
    peerDepsExternal(),
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
        input: entries,
        output: [
            {
                format: 'esm',
                dir: 'dist',
            },
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
    }
];
