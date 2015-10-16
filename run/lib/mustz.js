


var traverse = require('traverse')

module.exports = function (schema)
{
	schema = traverse.clone(schema)

	return traverse(schema).forEach(function (it)
	{
		if (it.constructor.name === 'Color') /* this lib is a naughty one */
		{
			if (it.alpha() < 1)
			{
				this.update(it.css())
			}
		}
	})
}
