


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

base16.names = [ 'white', 'black', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow' ]

base16.colors = {}
base16.colors.fg = {}
base16.colors.bg = {}

base16.names.forEach(create16)

function create16 (name)
{
	var c = C(name)

	c = c.desaturate(1.5)
	c = c.brighten(1)

	switch (name)
	{
	case 'white':
		c = schema.bg
		break

	case 'black':
		c = schema.fg
		break

	case 'red':
		c = c.set('hsl.h', '-15')
		break

	case 'green':
		c = C('green')
		c = c.brighten(1)
		c = c.set('hsl.h', '+30')
		break

	case 'blue':
		c = C('blue')
		c = c.set('hsl.h', '-25')
		break

	case 'cyan':
		c = C('cyan')
		c = c.desaturate(.5)
		c = c.darken(1)
		break

	case 'magenta':
		c = c.set('hsl.h', '-45')
		c = c.desaturate(.5)
		break

	case 'yellow':
		c = C('yellow')
		c = c.set('hsl.h', '-34')
		c = c.desaturate(.5)
		c = c.darken(.25)
		break
	}

	var it =
	{
		bg:  c,
		bgn: c.darken( .5),
		fg:  c.darken( .25),
		fgn: c.darken(1.25)
	}

	switch (name)
	{
	case 'white':
		it.bgn = c.darken(.5)

		it.fg  = c.brighten(1)
		it.fgn = c.brighten(.5)
		break

	case 'green':
		it.fgn = it.fg.darken(1.5)
		break

	case 'blue':
		it.bg  = c.brighten(.15)
		it.bgn = c.darken(.5)

		it.fg  = c
		break

	case 'cyan':
		c = c.set('hsl.h', '-5')
		it.bg  = c.darken(.25)
		it.bgn = c.darken(.75)
		break

	}

	var bg = base16.colors.bg[name] = {}
	bg.bright = it.bg
	bg.normal = it.bgn

	var fg = base16.colors.fg[name] = {}
	fg.bright = it.fg
	fg.normal = it.fgn
}
