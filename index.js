var libxml = require('libxmljs');
var xml =
  '<?xml version="1.0" encoding="UTF-8"?>' +
  '<root>' +
  '<child foo="bar">' +
  '<grandchild baz="fizbuzz">grandchild contentss</grandchild>' +
  '</child>' +
  '<sibling>with content!</sibling>' +
  '</root>';

var xmlDoc = libxml.parseXmlString(xml);
var gchild = xmlDoc.get('//grandchild');

console.log(gchild.text());
var children = xmlDoc.root().childNodes();
var child = children[0];

console.log(child.attr('foo').value());