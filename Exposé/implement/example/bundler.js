const parser = require('@babel/parser');
const fs = require('fs');

/**
 *Get abstract syntax tree of JS source file
 *@ param {string} file name
 */
function getAST(filename) {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module'
  });
  console.log(ast);
  return ast;
}

getAST('./example/greeting.js');

const traverse = require('@babel/traverse').default;

/**
 *Get importdeclaration
 */
function getImports(ast) {
  traverse(ast, {
    ImportDeclaration: ({ node }) => {
      console.log(node);
    }
  });
}

const ast = getAST('./example/entry.js');
getImports(ast);