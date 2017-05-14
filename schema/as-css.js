
var traverse = require('traverse')
var clone = traverse.clone

var is_chroma = require('../run/lib/is-chroma')

var schema = require('./schema')

module.exports = traverse(clone(schema))
.forEach(function (it)
{
	if (is_chroma(it))
	{
		this.update(it.css())
	}
})
