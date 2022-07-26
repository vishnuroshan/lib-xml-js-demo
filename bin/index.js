#! /usr/bin/env node
const yargs = require('yargs');
const utils = require('./utils.js');

const usage = '\nUsage: libxmldemo <xml_file_path> <option>';
const options = yargs
  .usage(usage)
  .option('c', { alias: 'create', describe: 'create xml file with data', type: 'boolean', demandOption: false })
  .option('arc', {
    alias: 'add-random-child',
    describe: 'add random-child to xml file',
    type: 'boolean',
    demandOption: false,
  })

  .help(true).argv;


if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}
var xml = utils.printXMLfromfile(yargs.argv);

console.log(xml)
