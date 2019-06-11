const { resolve, relative, extname } = require('path');
const {
    readdir, stat, writeFile, readFile
} = require('fs').promises;
const SVGO = require('svgo');

const svgo = new SVGO({
    plugins: [{ removeDimensions: true }, { removeViewBox: false }]
});

async function getSvgFiles(dir) {
    const subdirs = await readdir(dir);
    const files = await Promise.all(subdirs.map(async (subdir) => {
        const res = resolve(dir, subdir);
        return (await stat(res)).isDirectory() ? getSvgFiles(res) : res;
    }));
    return Array.prototype.concat(...files).filter(res => extname(res) === '.svg');
}

function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, word => word.toUpperCase()).replace(/\s+/g, '').replace(/[-\\/]/g, '');
}

function componentTemplate({ componentName, svg }) {
    return `import IconWrapper from './IconWrapper';

export default {
    name: '${componentName}',
    props: {
        size: {
            type: String
        },
        primaryColor: {
            type: String
        },
        secondaryColor: {
            type: String
        }
    },
    render(h) {
        // eslint-disable-next-line max-len
        return h(IconWrapper, { props: { ...this.$props }, domProps: { innerHTML: '${svg}' } });
    }
};
`;
}

async function getOptimizedSvg(path) {
    const data = await readFile(path, 'utf-8');
    const result = await svgo.optimize(data);
    return result.data;
}

async function generateIcons() {
    const glyphsPath = resolve(__dirname, '..', 'node_modules/@atlaskit/icon/svgs');
    const sourcePath = resolve(__dirname, '..', 'src/components/Icon/index.js');
    const files = await getSvgFiles(glyphsPath);

    const iconsData = files.map((file) => {
        const relativePath = relative(glyphsPath, file);
        const name = camelize(relativePath.substr(0, relativePath.length - 4));
        const componentName = `${name}Icon`;
        const glyphName = `${name}Glyph`;
        return { glyphName, componentName, file };
    });

    await Promise.all(
        iconsData.map(async ({ glyphName, file, componentName }) => {
            const svg = await getOptimizedSvg(file);
            const componentPath = resolve(__dirname, '..', `src/components/Icon/${componentName}.js`);
            const template = componentTemplate({ glyphName, svg, componentName });
            return writeFile(componentPath, template);
        })
    );
    const exports = iconsData.map(({ componentName }) => `export { default as ${componentName} } from './${componentName}';`).join('\n');

    let fileContent = '// This file is generated automatically with \'npm run generate-icons\' script\n';
    fileContent += `${exports}\n`;

    await writeFile(sourcePath, fileContent);
}

generateIcons();
