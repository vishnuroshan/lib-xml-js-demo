const libxml = require('libxmljs');
const shortid = require('shortid');
const fs = require('fs');

function printXMLfromfile(args) {
  console.log(args);
  const create = args['create'] ? true : false;
  const addRandomChild = args['addRandomChild'] ? true : false;
  const filepath = args._[0];
  console.log(filepath)
  if (!filepath) return 'see help';

  if(create && addRandomChild) return 'see help';

  if (!create && !addRandomChild && filepath) {
    console.log('reading xml file:');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    let document = libxml.parseXmlString(content, { noblanks: true });

    return document.toString();
  }

  if (fs.existsSync(filepath) && create) {
    console.log('create xml file');
    var document = new libxml.Document();
    document
      .node('root')
      .node('child')
      .attr({ foo: 'bar' })
      .node('vishnu', 'child vishnu')
      .attr({ baz: 'fizbuzz' })
      .parent()
      .parent();

    fs.writeFileSync(filepath, document.toString());
    return document.toString();
  }

  if (fs.existsSync(filepath) && addRandomChild) {
    console.log('add random-child to xml file');
    const content = fs.readFileSync(filepath, { encoding: 'utf-8' });
    let document = libxml.parseXmlString(content, { noblanks: true });
    let child = document.get('//child');
    const id = shortid();
    child.node(id, `child ${id}`);

    fs.writeFileSync(filepath, document.toString());
    return document.toString();
  }
}

module.exports = { printXMLfromfile };
