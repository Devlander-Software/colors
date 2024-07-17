// import { adjustColor } from "./adjustColor";



// export const generateColorsFrom = (
//   colors: ColorsInterface,
//   to: 'light' | 'dark'
// ): ColorsInterface => {
//   const adjustedColors: Partial<ColorsInterface> = { ...lightColors };

//   for (const colorKey in colors) {
//     let colorValue = colors[colorKey as ColorFromTheme];

//     if (colorValue === undefined) continue;
//     if (colorValue === 'transparent') continue;

//     // Convert HEX to RGB(A) if needed
//     if (colorValue.startsWith('#')) {
//       colorValue = hexToRgb(colorValue);
//     }

//     // Convert HSL to RGB if needed
//     else if (colorValue.startsWith('hsl')) {
//       const hsl = colorValue.match(/\d+/g)!.map(Number);
//       let possibility = hsl && hsl[0] && typeof hsl[0] === "number" && hsl && hsl[1] && typeof hsl[1] === "number" && hsl && hsl[0] && typeof hsl[0] === "number"? true : false;
//       if(possibility){
//         const [r, g, b] = hslToRgb(hsl[0] as number, hsl[1] as number, hsl[2] as number);
//         colorValue = `rgb(${r}, ${g}, ${b})`;
//       }
      
//     }

//     // Swap logic for black and white series
//     if (to === 'dark' && colorKey.startsWith('white')) {
//       const blackKey = colorKey.replace('white', 'black');
//       adjustedColors[colorKey as ColorFromTheme] =
//         colors[blackKey as ColorFromTheme];
//       continue;
//     } else if (to === 'light' && colorKey.startsWith('black')) {
//       const whiteKey = colorKey.replace('black', 'white');
//       adjustedColors[colorKey as ColorFromTheme] =
//         colors[whiteKey as ColorFromTheme];
//       continue;
//     }

//     // Check if the color property name contains "Alpha" and retain original value
//     if (colorKey.includes('Alpha')) {
//       adjustedColors[colorKey as ColorFromTheme] = colorValue;
//     } else {
//       adjustedColors[colorKey as ColorFromTheme] = adjustColor(
//         colorValue,
//         100,
//         to
//       );
//     }
//   }

//   return adjustedColors as ColorsInterface;
// };
