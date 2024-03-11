# Color Theme Generator

Generate color themes and palettes based on a primary color using a variety of algorithms and color manipulation techniques.

## Installation

To install the color theme generator, run the following command in your terminal:

```bash
npm install color-theme-generator
```

## Usage

After installing, you can use the library in your JavaScript projects to generate color themes.

### Example

Here's a simple example to get you started:

```javascript
const { generateComplementaryTheme } = require('color-theme-generator');

// Generate a theme using a base color
const baseColor = '#3498db'; // A nice shade of blue
const theme = generateComplementaryTheme(baseColor);

console.log(theme);
```

This will output a complementary color theme based on the provided base color.

## API

### generateComplementaryTheme(baseColor)

Generates a complementary color theme.

- `baseColor`: String - A color in hex, rgb, or hsl format that will be used as the base of the theme.

## Contributing

Contributions are welcome! If you have an idea for an improvement or find a bug, please open an issue or submit a pull request.
