
module.exports = function is_chroma (color)
{
	if (! color)
	{
		return false
	}
	if (Object(color) !== color)
	{
		return false
	}

	/* this lib is a naughty one */
	return color.constructor.name === 'Color'
}
