const fs = require('fs');
const pkg = require('../package.json');

buildConfig();
buildPkg();

function buildConfig() {
    const fileName = process.argv[3];

    fs.mkdirSync('./dist', {recursive: true});
    fs.copyFileSync(`./src/${fileName}.js`, './dist/index.js');
}

function buildPkg() {
    pkg.name = process.argv[2];

    fs.writeFileSync('./dist/package.json', JSON.stringify(pkg));
}
