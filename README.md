# Colors


## Hits
[![npm downloads](https://img.shields.io/npm/dm/@devlander/colors.svg)](https://www.npmjs.com/package/@devlander/colors)  
[![wakatime](https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/02037e5a-4e97-4cd5-872c-df41ad2d6b67.svg)](https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/02037e5a-4e97-4cd5-872c-df41ad2d6b67)

## Join My Dev Community
[![Join Devlander on Discord](https://img.shields.io/badge/Discord-Devlander-%235865F2)](https://bit.ly/devlander-discord-invite)  
[![Join Devlander on Twitch](https://img.shields.io/twitch/status/devlander)](https://bit.ly/devlander-twitch)  
[![Reddit](https://img.shields.io/badge/Reddit-r%2Fsoftwareengineersutah-orange?logo=reddit)](https://www.reddit.com/r/softwareengineersutah/)
[![Follow Landon Johnson On Twitter](https://img.shields.io/twitter/follow/landonwjohnson.svg?style=social&label=Follow)](https://bit.ly/landonwjohnson-on-twitter)  
[![Join the discussion on Github](https://img.shields.io/badge/Github%20Discussions%20%26%20Support-Chat%20now!-blue)](https://github.com/orgs/Devlander-Software/discussions)  

## Overview

The Devlander Colors package provides a collection of color utilities for JavaScript, including color pickers, color schemes, and palette generation. It's used across various projects to manage and utilize color schemes effectively.

## Installation

You can install the package using either Yarn or npm:

```sh
yarn add @devlander/colors
```

or

```sh
npm install @devlander/colors
```

## Usage

To use the main package, you can import the `Color` class and other utilities as follows:

```typescript
import { Color } from "@devlander/colors"

// Create a new color instance
const myColor = new Color('#3498db')

// Darken the color
const darkenedColor = myColor.darken(10).hex()
console.log(darkenedColor) // Output: a darkened hex color

// Lighten the color
const lightenedColor = myColor.lighten(10).hex()
console.log(lightenedColor) // Output: a lightened hex color

// Get the RGB string representation
console.log(myColor.rgb()) // Output: 'rgb(52, 152, 219)'

// Invert the color
const invertedColor = myColor.invert()
console.log(invertedColor) // Output: an inverted hex color

// Apply alpha to the color
const colorWithAlpha = myColor.alpha(0.5)
console.log(colorWithAlpha) // Output: hex color with applied alpha

// Blend with another color
const secondaryColor = { r: 255, g: 0, b: 0 } // Red color
const blendedColor = myColor.blend(50, secondaryColor).hex()
console.log(blendedColor) // Output: a blended hex color
```

## Available Utilities

- **darkenColor:** Darkens a given color by a factor.
- **lightenColor:** Lightens a given color by a factor.
- **blendColors:** Blends two colors based on a given factor.
- **applyAlphaToColor:** Applies alpha transparency to a color.
- **toHexColor:** Converts a color object to a hex string.
- **toRgbString:** Converts a color object to an RGB string.
- **hexToDecimal:** Converts a hex value to a decimal.

## Get Involved

- **Discord:** Join the Devlander community [here](https://bit.ly/devlander-discord-invite).
- **npm:** Download the package [@devlander/colors](https://www.npmjs.com/package/@devlander/colors).
- **GitHub Discussions:** Engage with the community and get support [here](https://github.com/orgs/Devlander-Software/discussions).
- **Twitch:** Watch live coding sessions [here](https://bit.ly/devlander-twitch).
- **Twitter:** Follow Landon Johnson [@landonwjohnson](https://bit.ly/landonwjohnson-on-twitter).
- **Wakatime:** Track our development progress [here](https://wakatime.com/badge/user/bd50b6c5-e0ca-4937-83b3-ab2d13adbc73/project/02037e5a-4e97-4cd5-872c-df41ad2d6b67).

## Future Goals

- Develop functions to generate themes based on colors and parameters.
- Implement a function to find complementary colors.
- Create a utility to extract colors from images.

### [Become a Sponsor!](https://bit.ly/sponsor-landonjohnson-github/)


