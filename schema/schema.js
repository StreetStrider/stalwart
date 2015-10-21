


var C = require('chroma-js')

var schema = module.exports = {}

schema.fg = C('333')
schema.bg = C('fbfbfb')

schema.inv = {}
schema.inv.fg = C('white')

schema.accent = C('CC0025')

schema.accent__b = {}
schema.accent__b.fg = C('2C7376')
schema.accent__b.bg = C('148B91')

schema.selection = C('F2FF0077')
schema.highlight = C('15FF0077')

schema.string = {}
schema.string.bg = C('FFCF6A')

schema.comment = {}
schema.comment.bg = C('E8E8E8')

var base16 = schema.base16 = {}

base16.names = [ 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'white' ]
base16.colors = {}

base16.names.forEach(function (name)
{
	base16.colors[name] = C(name)
})
