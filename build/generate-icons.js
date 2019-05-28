const { resolve, relative, extname } = require('path');
const { readdir, stat, writeFile } = require('fs').promises;

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

async function generateIcons() {
    const glyphsPath = resolve(__dirname, '..', 'node_modules/@atlaskit/icon/svgs');
    const sourcePath = resolve(__dirname, '..', 'src/components/Icon/index.js');
    const files = await getSvgFiles(glyphsPath);

    const iconsData = files.map((file) => {
        const relativePath = relative(glyphsPath, file);
        const name = camelize(relativePath.substr(0, relativePath.length - 4));
        const componentName = `${name}Icon`;
        const glyphName = `${name}Glyph`;
        const importPath = `@atlaskit/icon/svgs/${relativePath}`;
        return { glyphName, importPath, componentName };
    });

    const imports = iconsData.map(({ glyphName, importPath }) => `import ${glyphName} from '${importPath}';`).join('\n');
    const exports = iconsData.map(({ glyphName, componentName }) => `export const ${componentName} = createIconComponent('${componentName}', ${glyphName});`).join('\n');

    let fileContent = '// This file is generated automatically with \'npm run generate-icons\' script\n';
    fileContent += `${imports}\n`;
    fileContent += 'import createIconComponent from \'./create-icon-component\';\n\n';
    fileContent += `${exports}\n`;

    await writeFile(sourcePath, fileContent);
}

generateIcons();
