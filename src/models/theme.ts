export interface Theme {
  name: string;
  colors: {
    backgroundPrimary: string;
    backgroundSecondary: string;
    text: string;
    accent: string;
  };
}

export interface Themes {
  [key: string]: Theme;
}
