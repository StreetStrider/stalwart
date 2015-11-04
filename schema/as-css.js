
var traverse = require('traverse')
var schema = traverse.clone(require('./schema'))

module.exports = traverse(schema).forEach(function (it)
{
	if (it.constructor.name === 'Color') /* this lib is a naughty one */
	{
		this.update(it.css())
	}
})
