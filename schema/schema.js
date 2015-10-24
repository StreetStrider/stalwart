


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
base16.colors.fg = {}
base16.colors.bg = {}

base16.names.forEach(create16)

function create16 (name)
{
	var c = C(name)

	c = c.desaturate(1.5).brighten(1)

	switch (name)
	{
	case 'red':
		c = c.set('hsl.h', '-15')
		break;

	case 'green':
		c = c.set('hsl.h', '+25')
		break;

	case 'blue':
		c = C('blue')
		c = c.set('hsl.h', '-25')
		break;

	}

	var it =
	{
		bg:  c,
		bgn: c,
		fg:  c,
		fgn: c
	}

	switch (name)
	{
	case 'blue':
		it.bg  = c.brighten(.15)
		it.bgn = c.darken(.5)

		it.fgn = c.darken(1)
		break;

	default:
		it.bgn = it.bg.darken(1)
		it.fg  = it.bg.darken(.25)
		it.fgn = it.fg.darken(1)
	}

	var bg = base16.colors.bg[name] = {}
	bg.bright = it.bg
	bg.normal = it.bgn

	var fg = base16.colors.fg[name] = {}
	fg.bright = it.fg
	fg.normal = it.fgn
}
