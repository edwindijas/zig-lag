import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

const srcDir = path.join(import.meta.dirname, '../src');

const svgDir = path.join(srcDir, 'assets/icons/svg');
const iconDir = path.join(srcDir, 'components/atoms/icons');
const iconsComponentDir = path.join(iconDir, '/components');

const files = fs.readdirSync(svgDir);

// match _24dp, _32dp, etc.
const trimRegex = /_\d{2}dp/;

const toPascalCase = (str: string) =>
  str
    .replace(trimRegex, '')
    .replace(/(^\w|-\w)/g, (match) => match.replace('-', '').toUpperCase())
    .replace(/(^\w|_\w)/g, (match) => match.replace('_', '').toUpperCase());

const renameFileIfNeeded = (file: string) => {
  let newFileName = file;
  if (trimRegex.test(file)) {
    newFileName = file.substring(0, file.search(trimRegex)) + '.svg';
  }

  newFileName = newFileName.replace(/_/g, '-');

  const oldPath = path.join(svgDir, file);
  const newPath = path.join(svgDir, newFileName);

  if (oldPath !== newPath) {
    fs.renameSync(oldPath, newPath);
  }
  return newFileName;
};

const generateComponent = (file: string) => {
  const fileNameWithoutExt = path.basename(file, '.svg');
  const componentName = `Icon${toPascalCase(fileNameWithoutExt)}`;

  const svgImportPath = `@/assets/icons/svg/${fileNameWithoutExt}.svg?react`;

  const componentContent = `import Component from '${svgImportPath}';

import { WithStyleIcon } from '../with-style-icon';

export const ${componentName} = WithStyleIcon(Component);
`.trimStart();

  const outPath = path.join(iconsComponentDir, `${fileNameWithoutExt}.tsx`);

  fs.writeFileSync(outPath, componentContent, 'utf-8');
};

let exportStr = '';
const compNames: string[] = [];

const addFileToExport = (file: string) => {
  const fileNameWithoutExt = path.basename(file, '.svg');
  exportStr += `export * from './${fileNameWithoutExt}';\n`;
  compNames.push(`Icon${toPascalCase(fileNameWithoutExt)}`);
};

export const removeFillSvg = (fileName: string) => {
  const filePath = path.join(svgDir, fileName);
  const svgText = fs.readFileSync(filePath, 'utf8');

  const dom = new JSDOM(svgText, { contentType: 'image/svg+xml' });
  const document = dom.window.document;

  // Remove fill from all elements
  const elements = document.querySelectorAll('[fill]');
  elements.forEach((el) => el.removeAttribute('fill'));

  fs.writeFileSync(filePath, document.documentElement.outerHTML, 'utf8');
};

files.forEach((file) => {
  const finalFile = renameFileIfNeeded(file);
  generateComponent(finalFile);
  addFileToExport(finalFile);
  removeFillSvg(finalFile);
});

fs.writeFileSync(path.join(iconsComponentDir, 'index.ts'), exportStr);
fs.writeFileSync(
  path.join(iconsComponentDir, 'icons.json'),
  JSON.stringify(compNames, undefined, '  '),
);
