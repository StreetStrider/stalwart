
module.exports = function to_css (color)
{
	if (color.alpha() < 1)
	{
		return color.css()
	}
	else
	{
		return color.hex()
	}
}
