
module.exports = function to_hexa (color)
{
	if (color.alpha() < 1)
	{
		return color.hex() + alpha16(color.alpha())
	}
	else
	{
		return color.hex()
	}
}


var ceil = Math.ceil

function alpha16 (alpha)
{
	alpha = alpha * 255
	alpha = ceil(alpha)
	alpha = alpha.toString(16)
	return alpha
}
