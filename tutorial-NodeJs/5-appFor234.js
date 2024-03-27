

const names = require('./2-names') //can be destructured
const sayHi = require('./3-moduleFuntion')
const {items} = require('./4-alternativeExport')
console.log(items);

sayHi(names.john)
sayHi(names.peter)