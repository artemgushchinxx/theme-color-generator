const chroma = require('chroma-js');
const colorConvert = require('color-convert');
const colorDifference = require('color-difference');
const tinycolor = require('tinycolor2');
const randomcolor = require('randomcolor');
const colorNamer = require('color-namer');

/**
 * Generate a color theme based on a primary color.
 * @param {string} primaryColor The primary color in hex format.
 * @returns {object} An object containing the primary color and additional theme colors.
 */
function generateColorTheme(primaryColor) {
  const primaryChroma = chroma(primaryColor);
  const complementary = primaryChroma.set('hsl.h', '+180');
  const shades = [primaryChroma.darken().hex(), primaryChroma.brighten().hex()];
  const analogous = [primaryChroma.set('hsl.h', '-30'), primaryChroma.set('hsl.h', '+30')];
  const triadic = [primaryChroma.set('hsl.h', '+120'), primaryChroma.set('hsl.h', '-120')];

  const theme = {
    primary: primaryColor,
    complementary: complementary.hex(),
    shades: shades,
    analogous: analogous.map(color => color.hex()),
    triadic: triadic.map(color => color.hex()),
    random: randomcolor({ luminosity: 'dark', format: 'hex' }),
    name: colorNamer(primaryColor).ntc[0].name
  };

  return theme;
}

module.exports = {
  generateColorTheme,
  colorConvert,
  tinycolor,
  colorDifference
};
