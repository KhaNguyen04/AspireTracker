export type ColorTheme = {
  primary: string;
  secondary: string;
  textSecondary: string;
  textPrimary: string;
};

const sharedColors = {
  black: '#000000',
  white: '#FFFFFF',
};

type SharedColors = typeof sharedColors;

export type TColors = ColorTheme & SharedColors;

type ColorPalettes = {
  light: TColors;
  dark: TColors;
};

const Colors: ColorPalettes = {
  dark: {
    primary: '#080811',
    secondary: '#161629',
    textPrimary: sharedColors.white,
    textSecondary: '#67686E',
    ...sharedColors,
  },
  light: {
    primary: '#F8F8F8',
    secondary: '#E4E4E4',
    textPrimary: '#161629',
    textSecondary: '#9D5DB0',
    ...sharedColors,
  },
};

export default Colors;