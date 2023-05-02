import '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    tertiary?: Palette['primary'];
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
  }

  interface PaletteColor {
    lighter?: string;
    darker?: string;
  }
  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }
}